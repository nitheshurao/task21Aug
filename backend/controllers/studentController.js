import Student from '../models/Student.js';

export const createStudent = async (req, res) => {
    const { name, age, grade } = req.body;

    try {
        const newStudent = new Student({ name, age, grade });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ message: 'Error creating student', error });
    }
};

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students', error });
    }
};
