function save_form(form) {
    let data = {}
    const inputs = form.querySelectorAll("input")
    for (const input of inputs) {
        if (input.id && input.value) {
            data[input.id] = input.value
        }
    }
    data = JSON.stringify(data)
    console.log('save_form', form.id, data)
    localStorage.setItem(form.id, data)
}

function load_forms() {
    console.log('load_forms')
    const forms = document.querySelectorAll("form")
    for (const form of forms) {
        let data = localStorage.getItem(form.id)
        if (data) {
            data = JSON.parse(data)
            for (const key in data) {
                const input = form.querySelector("#" + key)
                if (input) {
                    console.log(input.type)
                    if (input.type === 'checkbox') {
                        input.checked = data[key]
                    }
                    else {
                        input.value = data[key]
                    }
                }
            }
        }
    }
}