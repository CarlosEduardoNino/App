const Holder = require('../models/holder');

const holderController = {
    getListarTodos: async (req, res) => {
        try {
            const holders = await Holder.find();
            res.json({ holders });
        } catch (error) {
            res.status(400).json({ error: "No se pudo realizar la operación" });
        }
    },

    getListarPorId: async (req, res) => {
        try {
            const { id } = req.params;
            const holder = await Holder.findById(id);
            if (!holder) return res.status(404).json({ error: "Holder no encontrado" });
            res.json({ holder });
        } catch (error) {
            res.status(400).json({ error: "No se pudo realizar la operación" });
        }
    },

    postHolder: async (req, res) => {
        try {
            const { email, password, document, name, rol, phone } = req.body;
            const holder = new Holder({ email, password, document, name, rol, phone });
            await holder.save();
            res.json({ holder });
        } catch (error) {
            res.status(400).json({ error: "No se pudo realizar la operación" });
        }
    },

    putModificar: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedData = req.body;
            const holder = await Holder.findByIdAndUpdate(id, updatedData, { new: true });
            if (!holder) return res.status(404).json({ error: "Holder no encontrado" });
            res.json({ holder });
        } catch (error) {
            res.status(400).json({ error: "No se pudo realizar la operación" });
        }
    },

    putActivar: async (req, res) => {
        try {
            const { id } = req.params;
            const holder = await Holder.findByIdAndUpdate(id, { state: 1 });
            if (!holder) return res.status(404).json({ error: "Holder no encontrado" });
            res.json({ holder });
        } catch (error) {
            res.status(400).json({ error: "No se pudo realizar la operación" });
        }
    },

    putInactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const holder = await Holder.findByIdAndUpdate(id, { state: 0 });
            if (!holder) return res.status(404).json({ error: "Holder no encontrado" });
            res.json({ holder });
        } catch (error) {
            res.status(400).json({ error: "No se pudo realizar la operación" });
        }
    }
};

module.exports = holderController;
