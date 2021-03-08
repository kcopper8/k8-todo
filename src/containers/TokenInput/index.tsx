import { useEffect, useRef } from "react";
import { useQuery, useQueryClient } from "react-query";
import {
  loadHost,
  loadToken,
  saveHost,
  saveToken,
} from "../../services/localStorage/tokenService";

interface Props {}

export const TokenInput: React.FC<Props> = () => {
  const { data } = useQuery("joplinConnection", async () => {
    return {
      host: await loadHost(),
      token: await loadToken(),
    };
  });

  const hostRef = useRef<HTMLInputElement>(null);
  const tokenRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  useEffect(() => {
    if (tokenRef.current && data && data.token) {
      tokenRef.current.value = data.token;
    }

    if (hostRef.current && data && data.host) {
      hostRef.current.value = data.host;
    }
  }, [tokenRef, hostRef, data]);

  const handleClick = async () => {
    if (!tokenRef.current?.value || !hostRef.current?.value) {
      alert("value required!");
      return;
    }

    await saveToken(tokenRef.current.value);
    await saveHost(hostRef.current.value);

    await queryClient.invalidateQueries();
  };

  return (
    <div>
      <h1>TokenInput</h1>
      <p>
        host: <input type="text" ref={hostRef} />
      </p>
      <p>
        token: <input type="text" ref={tokenRef} />
      </p>
      <button onClick={handleClick}>SAVE</button>
    </div>
  );
};
