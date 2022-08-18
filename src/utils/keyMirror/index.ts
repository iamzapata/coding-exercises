type KeyMirrorListProp = string[] | number[]

type Result<T extends string> = {
  [key in T]: T
}
export function keyMirror<T extends string>(
  list: KeyMirrorListProp
): Result<T> {
  if (!Array.isArray(list)) {
    throw new Error("'list' argument is not an Array.")
  }

  if (list instanceof Array && list.length === 0)
    throw new Error(
      "keyMirror: 'list' argument is empty. Expected a non-empty array."
    )

  const mirrored = Object.create(null)

  list.forEach((val) => {
    if (typeof val !== 'number' && typeof val !== 'string') {
      throw new Error(
        `keyMirror: list item must be a string or a number, got "${typeof val}".`
      )
    } else {
      const value = String(val)
      mirrored[value] = value
    }
  })

  return mirrored
}
