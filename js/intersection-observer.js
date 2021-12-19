
// Intersection Observer


//   <script>
//        if (document.documentElement.clientWidth < 700) {
//             scripts
//        }
//    </script>

/// GENERAL

// ///// H3 items ////
const subheadings = document.querySelectorAll('.animation-subheading')

observerSubs = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-subheading 0.3s ${entry.target.dataset.delay} forwards ease`
                observerSubs.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

subheadings.forEach(subheading => {
    observerSubs.observe(subheading)
})


///// Photo ////
const photos = document.querySelectorAll('.animation-photo')

observerPhotos = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-photo 1.6s ${entry.target.dataset.delay} forwards ease`
                observerPhotos.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

photos.forEach(photo => {
    observerPhotos.observe(photo)
})






//////  Section 1 - When  //////

const whens = document.querySelectorAll('.animation-when')

observerWhen = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-results 2s ${entry.target.dataset.delay} forwards ease`
            observerWhen.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

whens.forEach(when => {
    observerWhen.observe(when)
})


////// Section 3 - You ////////


const yous = document.querySelectorAll('.animation-you')

observerYou = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-results 2s ${entry.target.dataset.delay} forwards ease`
            observerYou.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

yous.forEach(you => {
    observerYou.observe(you)
})


////// Results //////

const results = document.querySelectorAll('.animation-results')

observerResults = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-results 1s ${entry.target.dataset.delay} forwards ease`
            observerResults.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

results.forEach(result => {
    observerResults.observe(result)
})






////List Items //////

const listItems = document.querySelectorAll('.animation-list-item')

observerList = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-list-item .4s ${entry.target.dataset.delay} forwards ease`
            observerList.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

listItems.forEach(listItem => {
    observerList.observe(listItem)
})


////Icons inside List Items //////

const icons = document.querySelectorAll('.animation-icons')

observerIcons = new IntersectionObserver((entries) => {
console.log(entries);

entries.forEach(entry => {
if (entry.intersectionRatio > 0) {
    entry.target.style.animation =
        `results-svg 0.6s ${entry.target.dataset.delay} forwards linear`
    observerIcons.unobserve(entry.target)
} else {
    entry.target.style.animation = `none`;
}
})
})

icons.forEach(icon => {
observerIcons.observe(icon)
})       


////// Section 6 - Donation

const donations = document.querySelectorAll('.animation-donation')

observerDonations = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-donation 0.6s ${entry.target.dataset.delay} forwards ease`
            observerDonations.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

donations.forEach(donation => {
    observerDonations.observe(donation)
})


