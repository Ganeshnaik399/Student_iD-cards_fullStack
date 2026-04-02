from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# In-memory storage (list of student objects)
students = [
    {"img":"https://static.vecteezy.com/system/resources/thumbnails/051/688/995/small_2x/smiling-young-male-university-student-standing-isolate-on-transparency-background-png.png","name": "GANESH NAIK", "rollno": 20212, "class": "ROOM-1"},
    {"img":"https://static.vecteezy.com/system/resources/previews/024/724/631/non_2x/a-happy-smiling-young-college-student-with-a-book-in-hand-isolated-on-a-transparent-background-generative-ai-free-png.png","name": "RAVIKUMAR", "rollno": 20213, "class": "ROOM-2"},
    {"img":"https://tse1.mm.bing.net/th/id/OIP.JtOrgieD2K1Ho_2LjZnaUAHaH4?pid=Api&P=0&h=180","name": "ANJALI", "rollno": 20214, "class": "ROOM-4"},
    {"img":"https://pngimg.com/uploads/student/student_PNG62555.png","name": "ANUSHA", "rollno": 20215, "class": "ROOM-3"},
    {"img":"https://static.vecteezy.com/system/resources/thumbnails/052/647/789/small_2x/student-with-backpack-ready-for-school-png.png","name": "SREELELA", "rollno": 20216, "class": "ROOM-3"},
    {"img":"https://purepng.com/public/uploads/large/purepng.com-female-studentstudenteducationalinstitutionstudentsuniversity-studentschoolfemale-student-142152692239821ad6.png","name": "SAKSHI", "rollno": 20217, "class": "ROOM-2"},
    {"img":"https://pngimg.com/uploads/student/student_PNG62539.png","name": "VENKAT", "rollno": 20218, "class": "ROOM-4"},
    {"img":"https://static.vecteezy.com/system/resources/thumbnails/038/252/103/small_2x/ai-generated-asian-male-student-smiling-happily-on-transparent-background-study-success-concept-png.png","name": "GANAPATHI", "rollno": 20219, "class": "ROOM-2"}
]

# ✅ Get all students
@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students)

# ✅ Add new student
@app.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()

    new_student = {
        "img":data.get("img"),
        "name": data.get("name"),
        "rollno": data.get("rollno"),
        "class": data.get("class")
    }

    students.append(new_student)
    return jsonify({"message": "Student added successfully", "student": new_student})

# ✅ Get student by roll number
@app.route('/students/<int:rollno>', methods=['GET'])
def get_student(rollno):
    for student in students:
        if student["rollno"] == rollno:
            return jsonify(student)
    return jsonify({"error": "Student not found"}), 404

# ✅ Update student
@app.route('/students/<int:rollno>', methods=['PUT'])
def update_student(rollno):
    data = request.get_json()

    for student in students:
        if student["rollno"] == rollno:
            student["img"] = data.get("img", student["img"])
            student["name"] = data.get("name", student["name"])
            student["class"] = data.get("class", student["class"])
            return jsonify({"message": "Updated successfully", "student": student})

    return jsonify({"error": "Student not found"}), 404

# ✅ Delete student
@app.route('/students/<int:rollno>', methods=['DELETE'])
def delete_student(rollno):
    global students
    students = [s for s in students if s["rollno"] != rollno]
    return jsonify({"message": "Deleted successfully"})

# Run server
if __name__ == '__main__':
    app.run(debug=True)