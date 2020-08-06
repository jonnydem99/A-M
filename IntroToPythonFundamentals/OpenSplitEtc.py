f = open(r'C:\workspaceVS\python_project\Student_Files\Python\Examples\mydata.csv','r');
n = 1;
while True:
    line = f.readline();
    if not line:
        break;
    line = line.strip();
    nbrs = line.split(",");
    print(n, nbrs)
    n += 1;
print("end of file")
