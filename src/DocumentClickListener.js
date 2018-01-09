
let listeners = []

document.addEventListener('click', evt => {
    listeners.forEach(listener => listener(evt))
})

const DocumentClickListener = {
    append: (fn) => listeners = [ ...listeners, fn ],
    remove: (fn) => listeners = listeners.filter(f => f !== fn)
}

export default DocumentClickListener