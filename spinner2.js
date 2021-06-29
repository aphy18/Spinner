let spinner = ['\r|','\r/','\r-','\r\\','\r|','\r/','\r-','\r\\','\r|']


for(let i = 0; i < spinner.length; i++){
    setTimeout(() => {
        process.stdout.write(spinner[i]);
    },i * 500)
}

setTimeout(() => {
    process.stdout.write("\n");
}, 4500)


