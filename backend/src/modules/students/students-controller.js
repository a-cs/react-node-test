const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
	const {name, className, section, roll} = req.query
	const allStudents = await getAllStudents({name, className, section, roll})
	res.status(200).json(allStudents)
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const payload = req.body
	const {message} = addNewStudent(payload) // ApiError 500
	res.status(201).json({message})
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
