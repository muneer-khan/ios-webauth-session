import { WebPlugin } from '@capacitor/core';
import type { ASWebAuthSessionPlugin } from './definitions';
export declare class ASWebAuthSessionWeb extends WebPlugin implements ASWebAuthSessionPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    startSession(options: {
        urlString: string;
        returnUrlScheme: string;
    }): Promise<{
        result: string;
    }>;
    cancelSession(): Promise<{
        message: string;
    }>;
}
