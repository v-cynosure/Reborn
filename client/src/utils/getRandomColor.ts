const schema = [
    'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
    'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
    'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
    'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
    'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
    'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
    'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
    'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)',
    'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)',
    'linear-gradient(180deg, #2af598 0%, #009efd 100%)',
    'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
    'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)',
    'linear-gradient(to top, #feada6 0%, #f5efef 100%)',
    'linear-gradient(to right, #74ebd5 0%, #9face6 100%)',
    'linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)',
    'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
    'linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)',
    'linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)',
    'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)',
    'linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
    'linear-gradient(to top, #09203f 0%, #537895 100%)',
    'linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%)',
    'linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%)',
    'linear-gradient(to top, #0fd850 0%, #f9f047 100%)',
    'linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%)',
    'linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)',
    'linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%)',
    'linear-gradient(to top, #b3ffab 0%, #12fff7 100%)',
]

const getRandomColor: any = (opacity = 0.5, min = 0, max = 255) => {
    const color = schema[Math.floor(Math.random() * schema.length)]
    return color
}

export default getRandomColor
