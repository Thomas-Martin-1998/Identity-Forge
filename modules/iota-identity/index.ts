import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to IotaIdentity.web.ts
// and on native platforms to IotaIdentity.ts
import IotaIdentityModule from './src/IotaIdentityModule';
import IotaIdentityView from './src/IotaIdentityView';
import { ChangeEventPayload, IotaIdentityViewProps } from './src/IotaIdentity.types';

// Get the native constant value.
export const PI = IotaIdentityModule.PI;

export function hello(): string {
  return IotaIdentityModule.hello();
}

//Native to Typescript -----------------------------------------------
export async function createDid(): Promise<string> {
  return await IotaIdentityModule.createDid();
}


export async function setValueAsync(value: string) {
  return await IotaIdentityModule.setValueAsync(value);
}

const emitter = new EventEmitter(IotaIdentityModule ?? NativeModulesProxy.IotaIdentity);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { IotaIdentityView, IotaIdentityViewProps, ChangeEventPayload };
