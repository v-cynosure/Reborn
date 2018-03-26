

# Reborn

## backend

### API

| Url          | Method |
| ------------ | ------ |
| api/register | post   |
| api/login    | post   |

### Status

| code | description                                              |
| ---- | -------------------------------------------------------- |
| 200  | ok                                                       |
| 401  | 权限错误，访问除了register/login以外的api都需要携带token |
| 500  | 服务器错误，请耐心等待我来修qwq                          |

### Response

