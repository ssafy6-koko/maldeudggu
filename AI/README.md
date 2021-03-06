# AI

## ๐Result

<img src="https://user-images.githubusercontent.com/42627507/163181048-cdb991e3-52b5-48e4-bcac-2134d65869e2.png" height="400">
<br><br>

์น์๋ฒ์์ ๋ชจ๋ธ์ ์คํํ๊ธฐ ์ํด ์ง์ฐ ์๊ฐ์ด ์งง์ <span style="color: #FB7D1E; font-weight: 700;">MobileNet V2</span>๋ฅผ ์ ํํ๊ณ <br>
100 ํ ์ฐ์ ์์ฒญ ์ ํ๊ท  ์ง์ฐ์๊ฐ์ **1.77์ด**๋ก ESNet(3.77์ด)๊ณผ ๋น๊ตํ์ ๋ <span style="color: yellow; font-weight: 700;">์ฝ 63%</span>์ ๋ ๋น ๋ฅธ ์ถ๋ก  ์๋๋ฅผ ๋ณด์์ต๋๋ค.

---

## ๐Dataset

![Dataset](https://user-images.githubusercontent.com/42627507/163181454-6b977046-b5ba-4494-bdfc-8fd6e7207b8f.png)

<br>

ํ์ฉํ ๋ฐ์ดํฐ๋ **ํ๊ตญ์ด ์์ฑ ๋ํ ๋ฐ์ดํฐ**์ **ํ๊ตญ์ด ๋ฐฉ์ธ ๋ฐํ ๋ฐ์ดํฐ**๋ก<br>
๊ฐ๊ฐ ์ฝ 5์ด, 6์ด ์ ๋์ ๊ธธ์ด๋ฅผ ๊ฐ์ง๊ณ ์์ต๋๋ค.

---

## ๐ฆพModel

| **MobileNetV2** | **ESNet** |
| :-----------------: | :-----------------: |
| <img src="https://user-images.githubusercontent.com/42627507/163181653-056b2aa0-a679-4948-914a-e0ac263979c6.png" height="500"> | <img src="https://user-images.githubusercontent.com/42627507/163181784-f37ad24f-463d-41ff-98d9-d1d72439b6bc.png" height="500"> |
| ๏ผ ์ ํ๋๋ฅผ ์ฝ๊ฐ ํฌ๊ธฐํ๊ณ , Cost๋ฅผ ์๋นํ ์ค์ธ ๋ชจ๋ธ <br> * ๋ผ๋ฌธ์์ ์ค์ด๋  ์ ํ๋ ๋๋น (1.1%), ์๋๋ ์ฝ 8~9๋ฐฐ ๋นจ๋ผ์ง | * Feature Extraction (Encoder), Semantic Segmentation (Decoder)์ผ๋ก ์ด๋ฃจ์ด์ง ๋ชจ๋ธ |

---

## ๐ฝPreprocessing

### Random Cutting, Zero Padding

<img src="https://user-images.githubusercontent.com/42627507/163182109-5da374e9-4c14-4a1e-99f2-9c94a5e30f43.png" width="400">

- AI ํ์ต์ ์ํด์  ์์ฑ์ ๊ธธ์ด๊ฐ ๊ธธ ๊ฒฝ์ฐ Random Cutting ์ ์ฉ
- ์์ฑ์ ๊ธธ์ด๊ฐ ์งง์ ๊ฒฝ์ฐ Zero Padding ์ ์ฉ

### Mel Spectogram

<img src="https://user-images.githubusercontent.com/42627507/163182404-4c1a4c5d-a7ee-4cfe-a8b4-b2f46dfa289e.png" width="400">

- ์ซ์๋ก ์ด๋ฃจ์ด์ง ํ์ต์ฉ ๋ฐ์ดํฐ Melspectogram์ผ๋ก ๋ณํ

---

## ๐Spec Augmentation

<img src="https://user-images.githubusercontent.com/42627507/163182550-af922bc4-0d59-4e22-a7e5-7fc191d3bccc.png" height="300">

- ์๊ฐ๋, ์ฃผํ์ ๋ง์คํน์ ํตํด ๋ค์ํ ์ํฉ์ ํ์ตํ  ์ ์๋๋ก ์ ์ฉ

