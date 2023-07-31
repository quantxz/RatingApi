import { File } from "buffer"

interface UserInterface {
    name:       string
    nickname:   string
    email:      string
    password:   string
    born:       string
    roles:      string
    followers:  number
}

interface PostInterface {
    id:         number
    name:       string
    content:    string
    file:       Buffer
    userId:     number
    replyId:    number
    reply?:     boolean | string
    RepleydUser?:    number
}

type All = PostInterface & UserInterface

export {
    UserInterface,
    PostInterface,
    All
}