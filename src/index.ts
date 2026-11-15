import type { Context } from '@deepseek-ai/cordis'

export const name = 'dsh-plugin-mobile-workbench'
export const inject = ['logger']

export interface Config {}

export function apply(ctx: Context, _config: Config) {
  ctx.logger?.info('[dsh-plugin-mobile-workbench] plugin loaded')
}
