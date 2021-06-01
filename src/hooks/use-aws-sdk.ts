import { ServiceConfigurationOptions } from 'aws-sdk/lib/service';
import { useMemo } from 'react';
import useAuthentication from '../hooks/use-authentication';
import useRegion from '../hooks/use-region';

export default function useAwsSdk<T>(
  Client: new (options?: ServiceConfigurationOptions) => T,
): T {
  const { accessKeyId, secretAccessKey } = useAuthentication();
  const [region] = useRegion();

  return useMemo((): T => {
    return new Client({
      accessKeyId,
      region,
      secretAccessKey,
    });
  }, [accessKeyId, Client, region, secretAccessKey]);
}
