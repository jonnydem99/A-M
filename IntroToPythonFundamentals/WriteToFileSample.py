f = open(r'C:\workspaceVS\python_project\Student_Files\Python\Examples\mydata.csv','a');
f.write("1,2,3,4,5,6")
f.close();

f = open(r'C:\workspaceVS\python_project\Student_Files\Python\Examples\mydata.csv','r');

while True:
    line = f.readline();
    if not line:
        break;
    line = line.strip();
    nbrs = line.split(",");
    print(nbrs)
print("end of file")
