import { WebPlugin } from '@capacitor/core';
import type { ASWebAuthSessionPlugin } from './definitions';
export declare class ASWebAuthSessionWeb extends WebPlugin implements ASWebAuthSessionPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
