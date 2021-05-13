const { readFile, writeFile } = require('fs');

readFile('./content/subfolder/text1.txt', 'utf8', (err, data) => {
    if (err) {

        console.log(err);
        return;
    } else {

        const first = data;

        readFile('./content/subfolder/text2.txt', 'utf8', (err, data) => {
            if (err) {

                console.log(err);
                return;
            } else {

                const second = data;
                console.log(">>", data)

                writeFile('./content/subfolder/as-mix.txt', `asynocronusmib ${first} and ${second}`, { flag: 'a' }, (err, data) => {
                    if (err) {

                        console.log(err);
                        return;
                    } else {

                        console.log(">>", data)
                    }
                })
            }

        })
    }
})