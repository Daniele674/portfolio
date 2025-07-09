"use client"; // necessario per usare lo state nel form

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Per ora simuliamo l'invio
        setStatus("Messaggio inviato! Ti risponderò presto.");
        setFormData({ name: "", email: "", message: "" });
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">Contatti</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    name="message"
                    placeholder="Messaggio"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition"
                >
                    Invia
                </button>
            </form>

            {status && <p className="mt-4 text-green-600">{status}</p>}
        </>
    );
}
