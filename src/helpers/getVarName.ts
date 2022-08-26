export const getVarName = function tmp(i: any) {
  const n = /getVarName\(([^)]+?)\)/.exec(
    tmp.caller !== null ? tmp.caller.toString() : ''
  )

  return n !== null ? n[1] : '0'
}
