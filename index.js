const wrapper = document.getElementById('wrapper');
const subject = document.getElementById('subject');
let backgroundNum = 1;


//test for keydown input
if (!wrapper) {
    console.error("wrapper element not found");
} else {
    console.log("wrapper element found");
    document.addEventListener('keydown', (event) => {
        console.log("Key pressed:", event.key);
        console.log(backgroundNum);

        if (event.key === 'ArrowRight') {
            console.log("right");
            wrapper.classList.remove(`context${backgroundNum}`);

            backgroundNum++;
            if (backgroundNum > 9) {
                backgroundNum = 1;
                wrapper.classList.remove(`context${9}`);
            }
            wrapper.classList.add(`context${backgroundNum}`);
            console.log(`Added class: context${backgroundNum}`);
            console.log(`backgroundNum: ${backgroundNum}`);

        } else if (event.key === 'ArrowLeft') {
            console.log('left');
            wrapper.classList.remove(`context${backgroundNum}`);
            console.log(`Removed class: context${backgroundNum}`);
            backgroundNum--;
            if (backgroundNum < 1) {
                backgroundNum = 9;
                wrapper.classList.remove(`context${1}`);
            }
            wrapper.classList.add(`context${backgroundNum}`);
            console.log(`Added class: context${backgroundNum}`);
            console.log(`backgroundNum: ${backgroundNum}`);
        }
        else if (event.key === 'ArrowUp' || 'ArrowDown') {
            subject.classList.toggle('subject2');
        }
    });
}