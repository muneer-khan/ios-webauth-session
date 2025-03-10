export interface ASWebAuthSessionPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
