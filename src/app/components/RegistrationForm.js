"use client"

import { useState } from "react"

const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
})

const [submitted, setSubmitted] = useState(false)

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
}

