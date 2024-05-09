import * as React from 'react';

import { IotaIdentityViewProps } from './IotaIdentity.types';

export default function IotaIdentityView(props: IotaIdentityViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
