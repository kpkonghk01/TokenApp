import rs from "random-string"

const randomString = (options) => {
  return rs({
    special: true,
    exclude: "!$%^&*()+|~=`{}[]:;<>?,./".split(""),
    ...options,
  })
}

export default randomString