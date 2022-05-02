class StudentService {
    static applyAllStudents(students) {
        return students;
    }

    static applyStudentsHaveCertification(students) {
        const studentsWithcertification = students.filter((student) => student.haveCertification === true);
        return studentsWithcertification.map((student) => student.email);
    }

    static applyStudentsApprove(students) {
        const studentsApprove = students.filter((student) => student.credits > 500);
        return studentsApprove;
    }
}

module.exports = StudentService;
