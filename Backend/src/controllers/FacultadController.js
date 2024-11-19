const sql = require('mssql');
const dbConfig = require('../config/db.config');

const facultadController = {
    // Obtener todas las encuestas
    getAllFacultades: async (req, res) => {
        try {
            const pool = await sql.connect(dbConfig);
            const result = await pool.request()
                .query('SELECT nombre, descripcion FROM Facultades');
            res.json(result.recordset);
        } catch (error) {
            res.status(500).json({ 
                error: 'Error al obtener las facultades',
                details: error.message 
            });
        }
    },
        // Crear una nueva encuesta
    createFacultad: async (req, res) => {
        try {
            const { nombre, descripcion } = req.body;
            
            const pool = await sql.connect(dbConfig);
            const result = await pool.request()
                .input('nombre', sql.NVarChar, nombre)
                .input('descripcion', sql.NVarChar, descripcion)
                .query(`
                    INSERT INTO Surveys (nombre, descripcion, createdAt) 
                    VALUES (@nombre, @descripcion, GETDATE());
                    SELECT SCOPE_IDENTITY() AS id;
                `);

            res.status(201).json({
                message: 'Facultad creada exitosamente',
                surveyId: result.recordset[0].id
            });
        } catch (error) {
            res.status(500).json({
                error: 'Error al crear la facultad',
                details: error.message
            });
        }
    },
    
};

module.exports = facultadController;