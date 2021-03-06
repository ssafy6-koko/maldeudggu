# Backend

## ๐งฃERD

![ERD](https://user-images.githubusercontent.com/42627507/163178479-4e68b652-86da-4a46-afe8-fedd62768444.png)

--- 

## ๐กAPI ๋ช์ธ
|๋ฒํธ| ๊ธฐ๋ฅ | METHOD | URI | PARAMETERS |
|:----:|:------:|:------:|:------:|:------:|
| 1 | ๊ณต์  ์ด๋ฏธ์ง ๋ชฉ๋ก ์กฐํ | `GET` | <code>api/v1/dialects/<mark>shared/</mark></code> | |
| 2 | ํ์คํธ ์ฐธ๊ฐ ์ธ์ | `GET` | <code>api/v1/dialects/<mark>participant/</mark></code> | |
| 3 | ํ์คํธ ์์ | `POST` | <code>api/v1/dialects/<mark>start/</mark></code> | |
| 4 | ํ์คํธ ๋ฌธ์ฅ ์ ๋ณด | `GET` | <code>api/v1/dialects/<mark>sentence/{sentence_pk}</mark></code> | |
| 5 | ์์ฑ ํ์ผ ์ ์ก | `POST` | <code>api/v1/dialects/<mark>{case_pk}/</mark></code> | sentence=`sentence_pk` |
| 6 | ํ์คํธ ๊ฒฐ๊ณผ ์กฐํ | `GET` | <code>api/v1/dialects/<mark>{case_pk}/result/</mark></code> | reuse=True, reuse=False |
| 7 | ์บ๋ฆญํฐ ์ด๋ฏธ์ง ์ ์ฅ | `PATCH` | <code>api/v1/dialects/<mark>{case_pk}/image/</mark></code> | |
| 8 | ์ค๋ฌธ ์ ๋ณด ์ ์ฅ | `POST` | <code>api/v1/dialects/<mark>{case_pk}/survey/</mark></code> | |
| 9 | ์ด๋ฏธ์ง ๋ด๋ ค๋ฐ๊ธฐ | `GET` | <code>api/v1/dialects/<mark>{case_pk}/download/</mark></code> | |
| 10 | ์ฌ์ฉ์ ์ด๋ฏธ์ง ํ์ธ | `GET` | <code>api/v1/dialects/<mark>{case_pk}/my/</mark></code> | |

--- 

## ๐กCI/CD

๋ง๋ฃ๊พธ๋ CI/CD ์์คํ์ ๊ตฌ์ถํ์์ต๋๋ค. 

push event ์ดํ ์๋์ ์ผ๋ก ๋น๋ & ์ต์ข ์์คํ ๋ก๋๊น์ง ์ด๋ฃจ์ด์ง๋๋ค.
<img align = "right" src="https://velog.velcdn.com/images/soover/post/e6896a09-5802-46dc-af32-15af096e9123/Jenkins.png" width="150">

### Jenkins

Jenkins์ Gitlab์ repository๋ฅผ ์ฐ๊ฒฐํ์์ต๋๋ค.

webhook ๊ธฐ๋ฅ์ ์ด์ฉํ์ฌ, develop branch์ push๋ฅผ ํ๋ฉด ์ง์ ํด ๋์ ์ผ์ ์ํํฉ๋๋ค.

Jenkins ์๋ฒ์์ git cloneํ ํ, ssh๋ฅผ ํตํด aws ec2 ์๋ฒ์ ํ์ผ์ ์ด๋์ํต๋๋ค.

์ดํ, ec2 ์๋ฒ์์ ๋ฏธ๋ฆฌ ๊ตฌํ๋ shell script๋ฅผ ์คํํ์ฌ ๋น๋&๋ฐฐํฌ ์์์ ์๋ฃํฉ๋๋ค.

[shell scrip](../deploy.sh) ์๋ฒ์ ๊ตฌ๋ ์ค์ธ ๋ฐฑ์๋/ํ๋ก ํธ์๋ ์๋ฒ๋ฅผ ์ข๋ฃํ๊ณ , ์๋ก ๋น๋ํ ๊ฒ์ ์๋ฒ์ ๊ตฌ๋์ํค๋ ๊ณผ์ ์ด ๊ตฌํ๋์ด ์์ต๋๋ค.

