import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { IotaIdentityViewProps } from './IotaIdentity.types';

const NativeView: React.ComponentType<IotaIdentityViewProps> =
  requireNativeViewManager('IotaIdentity');

export default function IotaIdentityView(props: IotaIdentityViewProps) {
  return <NativeView {...props} />;
}
