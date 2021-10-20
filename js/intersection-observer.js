
// Intersection Observer


//   <script>
//        if (document.documentElement.clientWidth < 700) {
//             scripts
//        }
//    </script>

/// GENERAL

// ///// H3 items ////
const subheadings = document.querySelectorAll('.animation-subheading')

observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-subheading 0.3s ${entry.target.dataset.delay} forwards ease`
                observer.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

subheadings.forEach(subheading => {
    observer.observe(subheading)
})


///// Photo ////
const photos = document.querySelectorAll('.animation-photo')

observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-photo 1.2s ${entry.target.dataset.delay} forwards ease`
                observer.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

photos.forEach(photo => {
    observer.observe(photo)
})




// Section 1


// Section When

const whens = document.querySelectorAll('.animation-when')

observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-results 2s ${entry.target.dataset.delay} forwards ease`
            observer.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

whens.forEach(when => {
    observer.observe(when)
})


////// Section 5


////// Results //////

const results = document.querySelectorAll('.animation-results')

observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-results 1s ${entry.target.dataset.delay} forwards ease`
            observer.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

results.forEach(result => {
    observer.observe(result)
})






////List Items //////

const listItems = document.querySelectorAll('.animation-list-item')

observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-list-item .4s ${entry.target.dataset.delay} forwards ease`
            observer.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

listItems.forEach(listItem => {
    observer.observe(listItem)
})


////Icons inside List Items //////

const icons = document.querySelectorAll('.animation-icons')

observer = new IntersectionObserver((entries) => {
console.log(entries);

entries.forEach(entry => {
if (entry.intersectionRatio > 0) {
    entry.target.style.animation =
        `results-svg 0.6s ${entry.target.dataset.delay} forwards linear`
    observer.unobserve(entry.target)
} else {
    entry.target.style.animation = `none`;
}
})
})

icons.forEach(icon => {
observer.observe(icon)
})       


////// Section 6 - Donation

const donations = document.querySelectorAll('.animation-donation')

observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-donation 0.6s ${entry.target.dataset.delay} forwards ease`
            observer.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

donations.forEach(donation => {
    observer.observe(donation)
})


