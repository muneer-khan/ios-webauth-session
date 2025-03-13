export interface ASWebAuthSessionPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  startSession(options: { urlString: string, returnUrlScheme: string }): Promise<{ result: string }>;
  cancelSession(): Promise<{ message: string }>;
}
