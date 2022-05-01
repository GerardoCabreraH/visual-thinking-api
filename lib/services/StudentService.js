class StudentService {
    static applyAllStudents(students) {
        return students;
    }

    static applyStudentsHaveCertification(students) {
        const studentsWithcertification = students.filter((student) => student.haveCertification === true);
        return studentsWithcertification.map((student) => student.email);
    }
}

module.exports = StudentService;
