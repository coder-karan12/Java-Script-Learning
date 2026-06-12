let obj = {
    name: "Karry",
    role: "Programmer",
    age: 18,
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
    
    
}

// used when we want object keys or elements or both at once