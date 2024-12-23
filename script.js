const questions = [
  {
    question:
      "Question 1: Hiện 1 vài items trong control panel thì ta làm sao, mặc định những items không cho phép là ẩn hết?",
    answers: [
      "A. Configuration Computer/ Control Panel/show specified control panel items",
      "B. Configuration User/ Control Panel/show specified control panel items",
      "C. Configuration Computer/ Control Panel/hide specified control panel items",
      "D. Configuration User/ Control Panel/hide specified control panel items",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 2: Quyền Read trong cấu hình Share Permission thì ý nào là đúng?",
    answers: [
      "A. Xóa tập tin trong thư mục chia sẻ",
      "B. Cho phép người dùng thay đổi dữ liệu trên tập tin",
      "C. Cho phép người dùng xem và thi hành các tập tin này trong mục chia sẻ",
      "D. Toàn quyền trên thư mục chia sẻ",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 3: Một ổ đĩa cứng vật lý được định dạng basic disk có thể chia tối đa bao nhiêu primary partition?",
    answers: [
      "A. “4 primary” or “ 3 primary và 1 extended”",
      "B.  4 primary và 1 extended",
      "C. “ 1 primary và 3 extended “ or “4 primary”",
      "D. 2 primary và 2 extended",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 4: Để nâng cao bảo mật trong mạng bạn thực hiện chính sách Maximum Password Age là 7 ngày. Chính sách này sẽ yêu cầu người sử dụng phải đổi mật khẩu hàng tuần. Tuy nhiên sau một thời gian bạn nhận thấy có một vài người sử dụng sau khi đổi sang mật khẩu mới lại đổi ngay về mật khẩu cũ. Bạn sẽ sử dụng chính sách nào dưới đây để tránh tình trạng này",
    answers: [
      "A. Enforce Password history",
      "B. Store passwords using reversible encryption",
      "C. Maximum password age",
      "D. Minimum password age",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 5: Bạn có một văn phòng nhỏ mỗi máy thì chịu trách nhiệm cho sự bảo mật của chính nó. Kiều mạng nào mà bạn cần thực thi?",
    answers: [
      "A. Mạng ngang hàng",
      "B. Mạng diện rộng (WAN)",
      "C. Mạng hợp tác",
      "D. Cả 3 đáp án còn lại đều sai",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 6: Dịch vụ mạng nào sau đây có thể cấu hình cho máy tính của bạn nhận được địa chỉ IP, default gateway, subnet mask, DNS Server, WINS Server ?",
    answers: ["A. DHCP", "B. FTP", "C. DNS", "D. WINS"],
    correctAnswer: "A",
  },
  {
    question:
      "Question 7: Muốn chỉ định máy tính nào user được phép sử dụng, bạn thực hiện?",
    answers: [
      "A. Nhấp đôi chuột lên user để mở hộp thoại Properties, chọn tab Account, bấm nút Login Hours",
      "B. Nhấp đôi chuột lên user để mở hộp thoại Properties, chọn tab Account, bấm nút Log On To",
      "C. Nhấp đôi chuột lên user để mở hộp thoại Properties, chọn tab Account, bấm nút Login Hours",
      "D. Nhấp đôi chuột lên user để mở hộp thoại Properties, chọn tab Account, bấm nút Login Days",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 8: Để kiểm tra kết nối từ máy A đến máy B có địa chỉ IP 192.168.1.20, thực hiện?",
    answers: [
      "A. Ping 192.168.1.20",
      "B. Ping 192.168.20.1",
      "C. Nslookup 192.168.1.20",
      "D. Netstat 192.168.1.20",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 9: Ấn một vài items trong control panel, thì ta làm sao, mặc định những items còn lại là hiện ra?",
    answers: [
      "A. Configuration User / Control Panel / hide specified control panel items",
      "B. Configuration Computer / Control Panel/hide specified control panel items",
      "C. Configuration User / Control Panel / show specified control panel items",
      "D. Configuration Computer/Control Panel / show specified control panel items",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 10: Công cụ sau đây cho phép tạo ra các tài khoản người dùng, máy tính và nhóm dựa trên dữ liệu bạn nhập vào hoặc từ một file?",
    answers: [
      "A. Active Directory Domains And Trusts",
      "B. DSQUERY",
      "C. DSMOD",
      "D. Active Directory Users And Computers",
    ],
    correctAnswer: "D",
  },
  {
    question: "Question 11: Hệ điều hành nào không gia nhập vào domain được?",
    answers: [
      "A. windows 7",
      "B. Android",
      "C. windows server 2008",
      "D. windows 8",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 12: Volume striped (Raid 0) được tạo từ ít nhất bao nhiêu Volume?",
    answers: ["A. 4 đĩa", "B. 2 đĩa", "C. 3 đĩa", "D. 5 đĩa"],
    correctAnswer: "B",
  },
  {
    question:
      'Question 13: Bạn là quản trị mạng của một Công ty lớn, bạn nhận được thông báo từ một số người sử dụng là không thể vào được Internet. Bạn mở cửa sổ trình duyệt trên máy của bạn và cũng nhận được thông báo tương tự khi truy nhập Internet. Bạn chạy "Ipconfig" từ cửa số lệnh để xác nhận các thiết lập TCP / IP trên máy tính của bạn, sử dụng lệnh "ping" và bạn vẫn có thể kết nối tới địa chỉ 172.16.0.2 đây là địa chỉ của một trong các máy chủ ở trong mạng của bạn. Bạn thử ping tên của một WebSite và nhận được thông báo lỗi sau: "Ping request could not find host". Bạn nên kiểm tra cái gì trước?',
    answers: ["A. Card mạng", "B. Switch", "C. Máy chủ DNS", "D. Máy chủ DHCP"],
    correctAnswer: "C",
  },
  {
    question:
      "Question 14: Nam đã đặt các hạn ngạch (quota) cho 250 người sử dụng trên một phân vùng của máy chủ sử dụng Windows Server 2008. Ba mươi người được cấp 10 MB, 45 người được 15 MB, 100 người được 30 MB, 25 người được 60 MB, và 50 người được 100 MB. Có thêm bốn máy chủ khác cũng yêu cầu các thiết lập về hạn ngạch giống như trên. Bạn hãy cho biết Nam có thể sử dụng cách nào dưới đây để đáp ứng được yêu cầu ở trên?",
    answers: [
      "A. Hạn ngạch được thiết lập bởi Group Policy. Nam cần phải đưa bốn máy chủ này vào trong cùng một OU",
      "B. Nam phải thực hiện việc này bằng cách sử dụng phần mềm của hãng thứ ba",
      "C. Trong phần Quota Entries, Nam phải chọn tất cả các thiết lập Quota của 250 người sử dụng này sau đó export ra file. Sau đó Nam copy file này tới các máy chủ còn lại và import vào phần Quota Entries của từng phân vùng mà Nam muốn áp dụng các thiết lập hạn ngạch như máy chủ ban đầu",
      "D. Nam phải sử dụng Active Directory Users And Computers để thêm bốn máy chủ này vào cùng nhóm bảo mật hạn ngạch với máy chủ ban đầu mà Nam đã tạo ra",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 15: Trong chính sách mật khẩu, chính sách Account Lockout Duration là gì?",
    answers: [
      "A. Quy định số lần cố gắng đăng nhập trước khi tài khoản bị khóa",
      "B. quy định thời gian khóa tài khoản",
      "C. Quy định thời gian đếm lại số lần đăng nhập không thành công",
      "D. Cả 3 đáp án còn lại đều sai",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 16: Mặc định khi tạo user account trên Windows Server 2008 domain controller thuộc nhóm nào?",
    answers: [
      "A. Domain Users",
      "B. Administrators",
      "C. Local User",
      "D. Power User",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 17: Muốn cho các tập tin hay thư mục của Folder abc cho các user nào thì user đó quyền xóa thư mục con và tập tin thì ta làm việc gì?",
    answers: [
      "A. Bỏ dấu check Read Permission",
      "B. Bỏ dấu check Delete",
      "C. Bỏ dấu check Delete Subfolder and Files",
      "D. Bỏ dấu check Change Permissions",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 18: Domain Controller Security Policy với các tùy chỉnh trong đây sẽ tác động lên đâu?",
    answers: [
      "A. Tác động lên Local",
      "B. Tác động lên User trên Domain",
      "C. Tác động lên DC và User",
      "D. Tác động lên DC trên Domain",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 19: Để cấp quyền cho người dùng có thể logon hệ thống mà không nhấn tổ hợp phím CTRL+ALT+DELETE, ta cấp quyền cho user quyền nào?",
    answers: [
      "A. Interactive logon: deny CTRL+ALT+DEL",
      "B. Interactive Logon: Dont require CTRL+ALT+DEL",
      "C. Interactive logon: cancel CTRL+ALT+DEL",
      "D. Cả 3 đáp án còn lại đề sai",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 20: Hệ điều hành nào không được nâng cấp lên Windows server 2008 Enterprise?",
    answers: [
      "A. Windows Server 2003 Enterprise (SP1)",
      "B. Windows Server 2003 R2 Tiêu chuẩn",
      "C. Windows Server 2003 Standard, gói dịch vụ 1 (SP2)",
      "D. Windows Server 2003 R2 Enterprise",
    ],
    correctAnswer: "A",
  },
  {
    question: "Question 21: Tạo file screen áp dụng vào thư mục, dùng để:",
    answers: [
      "A. Ngăn chặn một số định dạng file lưu trữ vào thư mục.",
      "B. Cấp quyền truy cập thư mục cho tài khoản người dùng.",
      "C. Giới hạn dung lượng sử dụng của thư mục.",
      "D. Chỉ định các định dạng file trong thư mục được hiển thị trên màn hình desktop.",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 22: Bạn là quản trị mạng trong domain tdmu.edu.vn. Default Domain Policy được cấu hình như sau: Maximum password age = 30 days, Account lockout threshold = 1. Một user là U1 trở về sau kì công tác xa, do không nhớ password nên khi U1 log-on vào domain đã hiển thị thông báo sai password. Bạn đã reset password cho U1 nhưng anh ta vẫn không thể log-on được. Bạn sẽ làm gì để giải quyết ngay tình huống này?",
    answers: [
      "A. Unlock tài khoản người dùng của U1",
      "B. Restart máy tính của U1",
      "C. Reset password tài khoản máy tính của U1",
      'D. Tăng giá trị của thiết lập "Maximum password age" trong Default Domain Policy',
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 23: Trong chính sách kiểm toán, chính sách Audit Object Access là gì?",
    answers: [
      "A. Ghi nhận các sự kiện liên quan đến quá trình Logon",
      "B. Ghi nhận việc truy cập các tập tin, thư mục và máy in",
      "C. Ghi nhận việc truy cập các dịch vụ thư mục",
      "D. Ghi nhận việc thay đổi trong chính sách kiểm toán",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 24: Trong chính sách mật khẩu, chính sách Reset Account Lockout Counter After là gì?",
    answers: [
      "A. Quy định thời gian đếm lại số lần đăng nhập không thành công",
      "B. Quy định số lần cố gắng đăng nhập trước khi tài khoản bị khóa",
      "C. Quy định thời gian khóa tài khoản",
      "D. Cả 3 đáp án còn lại đều sai",
    ],
    correctAnswer: "A",
  },
  {
    question: "Question 25: Dịch vụ VPN có chức năng chính là gì?",
    answers: [
      "A. Tạo Email sử dụng qua Internet",
      "B. Tạo mạng riêng ảo thông qua mạng Internet",
      "C. Điều khiển máy tính từ xa",
      "D. Cấp địa chỉ IP tự động",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 26: DNS (Domain Name System) Server là một máy chủ được dùng để:",
    answers: [
      "A. Phân giải (forward) tên máy thành địa chỉ IP và ngược lại (reverse).",
      "B. Phân giải ngược địa chỉ IP (reverse) thành tên máy.",
      "C. Phân giải IP của máy chủ thành IP của máy Client.",
      "D. Phân giải (forward) tên máy thành địa chỉ IP.",
    ],
    correctAnswer: "A",
  },
  {
    question: "Question 27: Giao thức HTTP là:",
    answers: [
      "A. Giao thức tầng vận chuyển cho phép truyền tải các trang web",
      "B. Giao thức ứng dụng cho phép các máy tính giao tiếp với nhau qua Web có khả năng liên kết       các trang Web với nhau",
      "C. Giao diện web",
      "D. Một thành phần của tên miền",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 28: Trong chính sách mật khẩu, mục Minimum password length dùng để:",
    answers: [
      "A. Quy định số ngày tối thiểu người dùng phải đổi mật khẩu.",
      "B. Thiết lập mật khẩu không cần độ phức tạp.",
      "C. Quy định số ký tự tối thiểu của mật khẩu.",
      "D. Quy định số ngày tối thiểu người dùng được phép đổi mật khẩu.",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 29: File hệ thống nào sau đây được hỗ trợ bởi Windows Server 2008?",
    answers: [
      "A. Cả 3 đáp án còn lại đều đúng",
      "B. NTFS",
      "C. FAT32",
      "D. FAT16",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 30: Sau khi máy server nhận được thông tin xin IP của client thì máy server sẽ gửi gói tin gì ra?",
    answers: [
      "A. DHCPACK",
      "B. DHCPOFFER",
      "C. DHCPDISCOVER",
      "D. DHCPREQUEST",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 31: Bạn là thành viên của ba nhóm SinhVien, GiaoVien, HocSinh. Nhóm SinhVien có quyền Read đối với thư mục C:\\DATA, nhóm GiaoVien có quyền Modify, nhóm HocSinh có quyền No Access, bạn có quyền Write. Quyền thực thi của bạn đối với thư mục C:\\DATA?",
    answers: ["A. No Access", "B. Write", "C. Read", "D. Modify"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 32: Hệ điều hành nào được nâng cấp lên Windows server 2008 Standard",
    answers: [
      "A. Windows Server 2003 R2 Datacenter",
      "B. Windows Server 2003 R2 Standard",
      "C. Windows Server 2003 R2 Enterprise",
      "D. Windows Server 2003 Enterprise (SP1)",
    ],
    correctAnswer: "B",
  },
  {
    question: "Question 33: Windows Server 2008 sử dụng giao thức nào?",
    answers: ["A. AppleTalk", "B. NetBEUI", "C. TCP/IP", "D. IPX"],
    correctAnswer: "C",
  },
  {
    question:
      "Question 34: Để một user thuộc nhóm Domain Users có thể đăng nhập cục bộ vào máy Domain Controller thì trong chính sách hệ thống (User Rights), Anh/ Chị phải cấp quyền gì cho user đó?",
    answers: [
      "A. Allow logon throughs Terminal services",
      "B. Allow logon locally",
      "C. Deny logon locally",
      "D. Allow logon local computer",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 35: Bạn lắp thêm vào máy chủ Windows Server 2008 của bạn ba ổ cứng mới, sau khi lắp xong bạn bật máy và đăng nhập bằng tài khoản có quyền quản trị và mở Console Disk Management. Khi vừa mở ra bạn sẽ thấy xuất hiện Initialize And Convert Disk Wizard. Bạn hãy cho biết bạn có thể làm gì trong Wizard này với các ổ cứng mới vừa được lắp thêm vào?",
    answers: [
      "A. Tạo ra Extended partition",
      "B. Tạo ra Primary Partition",
      "C. Tạo RAID-5 Volume",
      "D. Khởi tạo (Initialize) đĩa mới",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 36: Bạn là quản trị mạng cho một tổ chức, bạn phải sử dụng các công cụ để giám sát tình trạng sử dụng mạng tại tổ chức của bạn nhằm đảm bảo nó vẫn hoạt động bình thường theo đúng thiết kế của mạng. Công cụ nào sẽ giúp bạn gửi cảnh báo (alert) khi tình trạng sử dụng mạng vượt quá 85%?",
    answers: [
      "A. Network Monitor",
      "B. Performances log and Alerts",
      "C. Performances Monitor",
      "D. Event Viewer",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 37: Một người quản trị mạng cấu hình hạn ngạch đĩa (disk Quota) để giới hạn lại dung lượng đĩa cho mọi người dùng là 500MB trên ổ đĩa D: tuy nhiên đối với một số trường hợp đặc biệt như giám đốc hoặc trưởng phòng thì nhu cầu cần lưu dữ liệu cao hơn so với hạn ngạch mà người quản trị đã định. Trong trường hợp này người quản trị làm gì?",
    answers: [
      "A. Không thể định Quata đặc biệt cho một user cụ thể nào",
      "B. Mở propertities của ổ đĩa D: sau đó chọn tab Quota, nhấp vào nút Quata entries... Sau đó nhấp đôi chuột vào user mà bạn không muốn giới hạn Quota và chọn Do not limit disk usage",
      "C. Những người nào mà bạn không muốn quy định hạn ngạch đĩa thì cho họ lưu dữ liệu trên các partition khác trên server vd: Ổ đĩa E: và partition đó được định dạng là FAT32",
      "D. Không quy định hạn ngạch đĩa nữa",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 38: Ta có folder data áp cho các user chịu các permission của Share là Read và NTFS là Write thì những user đó chịu quyền gì?",
    answers: [
      "A. Write",
      "B. Không được truy cập (rỗng",
      "C. Full Control",
      "D. read",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 39: Công cụ nào có chức năng tạo và quản lý các đối tượng cơ bản của hệ thống Active Directory?",
    answers: [
      "A. Active Directory users and computers",
      "B. Active Directory domain and trust",
      "C. Computer Management",
      "D. Active Directory Sites and services",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 40: Nam đang thiết lập quyền NTFS trên thư mục D:\\DATA cho nhóm Managers. Anh ấy muốn nhóm Manager Group được phép liệt kê nội dung của thư mục và đọc dữ liệu của các files trong thư mục. Anh ấy không muốn bất kì ai trong nhóm thay đổi hoặc xóa bất kì dữ liệu nào. Quyền NTFS nào nên được anh ấy cung cấp?",
    answers: ["A. Modify", "B. Full control", "C. Write", "D. Read"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 41: Sử dụng dịch vụ nào sau đây để phân giải tên miền sang địa chỉ IP?",
    answers: ["A. WINS", "B. FIP", "C. DHCP", "D. DNS"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 42: Đại là quản trị hệ thống của công ty ABC, công ty có một máy chủ với hệ điều hành Windows Server 2008 và cài đặt SQL Server 2012. Máy chủ này có 4 ổ cứng SCSI, ổ cứng đầu tiên được sử dụng để chứa hệ điều hành và các phần mềm ứng dụng. Ba ổ cứng còn lại được sử dụng để tạo ra RAID-5 volume, chứa các cơ sở dữ liệu trên máy chủ này. Hiện tại volume này đã được sử dụng 40%, một trong ba đĩa của RAID-5 volume này bị hỏng. Bạn hãy cho biết trong các phát biểu dưới đây về tình huống này, phát biểu nào là đúng?",
    answers: [
      "A. Máy chủ sẽ bị tạm dừng, và chỉ hoạt động khi ổ đĩa cứng hỏng được thay thế",
      "B. Máy chủ sẽ tiếp tục hoạt động và dữ liệu sẽ không bị mất",
      "C. Sau khi RAID-5 volume được kích hoạt trở lại (reactivate), máy chủ sẽ tiếp tục hoạt động. Dữ liệu mới không thể ghi vào RAID-5 volume này, nhưng các dữ liệu hiện thời có thể đọc và sao lưu (backup)",
      "D. Tất cả dữ liệu sẽ bị mất, để có khả năng chịu lỗi bạn phải sử dụng striped volume thay cho RAID-5 volume",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 43: Bạn là người quản trị mạng muốn tạo ra một số user chỉ hoạt động với một số quyền hạn nào đó. Bạn phải tạo ra các user như thế nào để thuận lợi cho việc quản lý của mình.",
    answers: [
      "A. Tạo ra các user và phân quyền đặc trưng cho các user đó.",
      "B. Tạo ra một Organizational Units (OU) và tạo các user trong OU đó.",
      "C. Tạo các user và gán cho các user vào nhóm administrators.",
      "D. Tạo một Organizational Units (OU) và tạo một Group trong OU này, sau đó tạo các user trong OU này và đồng thời add các user vào Group.",
    ],
    correctAnswer: "D",
  },
  {
    question: "Question 44: Bộ lọc IPsec dựa trên yếu tố nào?",
    answers: [
      "A. Theo số hiệu cổng và kiểu cổng",
      "B. Địa chỉ IP, subnet hoặc tên DNS của máy đích",
      "C. Cả 3 đáp án còn lại đều đúng",
      "D. Địa chỉ IP, subnet hoặc tên DNS của máy nguồn",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 45: Dữ liệu được lưu trữ trên từng đĩa với lưu lượng giống nhau là cấu hình loại Volume nào?",
    answers: [
      "A. Volume Spanned",
      "B. Volume Striped (Raid 0)",
      "C. Volume Mirrored (Raid 1)",
      "D. Volume Simple",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 46: Bạn có một máy chủ với bốn ổ cứng SCSI, ổ đĩa thứ nhất được mirror với ổ đĩa thứ ba, ổ đĩa thứ hai được mirror với ổ đĩa thứ tư. Giả sử ổ đĩa thứ tư bị hỏng, bạn sẽ phải làm gì để khôi phục lại khả năng chịu lỗi của hệ thống?",
    answers: [
      "A. Bạn phải tháo ổ cứng hỏng, lắp đặt ở cứng mới và break mirror giữa ổ đĩa cứng thứ nhất và thứ ba",
      "B. Bạn phải break mirror giữa ổ đĩa thứ nhất và thứ ba trước khi lắp đặt đĩa cứng thay thế",
      "C. Bạn phải break mirror giữa ổ đĩa thứ hai và thứ tư trước khi lắp đặt đĩa cứng thay thế",
      "D. Bạn phải tạo lại mirror giữa ổ cứng thứ nhất và ổ cứng mới sau khi cài đặt xong ổ cứng mới này",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 47: Hyper-V được thiết kế dựa trên công nghệ ảo hóa hypervisor (hypervisor-based virtualization technology), cho phép tạo máy ảo chạy độc lập nhưng:",
    answers: [
      "A. Tất cả các máy ảo cùng chia sẻ một nền tảng phần cứng và phần mềm.",
      "B. Mỗi máy ảo sẽ sử dụng một phần cứng riêng.",
      "C. Các máy ảo chỉ chia sẻ phần mềm.",
      "D. Tất cả các máy ảo cùng chia sẻ một nền tảng phần cứng.",
    ],
    correctAnswer: "D",
  },
  {
    question:
      'Question 48: Trong chính sách mật khẩu của server 2008 thì chính sách "Maximum password age" mặc nhiên quy định sau bao nhiêu ngày phải đổi password?',
    answers: ["A. 42", "B. 44", "C. 46", "D. 48"],
    correctAnswer: "A",
  },
  {
    question:
      "Question 49: Bạn lắp thêm vào máy chủ Windows Server của bạn ba ổ cứng mới, sau khi lắp xong bạn bật máy và đăng nhập bằng tài khoản có quyền quản trị và mở Console Disk Management. Khi vừa mở ra bạn sẽ thấy xuất hiện Initialize And Convert Disk Wizard. Bạn hãy cho biết bạn có thể làm gì trong Wizard này với các ổ cứng mới vừa được lắp thêm vào?",
    answers: [
      "A. Tạo ra Primary Partition",
      "B. Khởi tạo (Initialize) đĩa mới",
      "C. Tạo RAID-5 Volume",
      "D. Tạo phân vùng mở rộng",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 50: Ta có folder data áp cho các user chịu các permission của Share là Change và NTFS là Write thì những user đó chịu quyền gì?",
    answers: [
      "A. Full Control",
      "B. Write",
      "C. Read",
      "D. Không được truy cập (rỗng)",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 51: Hiển thị button shutdown tại màn hình của user thì ta làm sao?",
    answers: [
      "A. Configuration Computer / Admin template / templete / system / display shutdown / disable",
      "B. Configuration User / Admin template / templete / system / display shutdown / enable",
      "C. Configuration Computer / Admin template / templete / system / auto play policies / enable",
      "D. Configuration Computer / Admin template / templete / system / display shutdown / enable",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 52: Account Policy được dùng để chỉ định các thông số nào?",
    answers: [
      "A. Chỉ định thông số về tài khoản người dùng",
      "B. Chỉ định thông số về thông tin AD",
      "C. Chỉ định thông số và bản quyền DC",
      "D. Chỉ định thông số về cấu hình DC",
    ],
    correctAnswer: "A",
  },
  {
    question: "Question 53: Hỗ trợ chính sách mã hóa là định dạng đĩa nào?",
    answers: ["A. FAT16", "B. FA132", "C. Cả 3 đều sai", "D. NTFS"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 54: Khi cài đặt printer thì everyone được mặc định gán quyền gì?",
    answers: [
      "A. Không có quyền",
      "B. Manage printer",
      "C. Manage documents",
      "D. Print",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 55: Dữ liệu được lưu trữ tuần tự trên từng đĩa là cấu hình loại Volume nào?",
    answers: [
      "A. Volume Simple",
      "B. Volume Spaned",
      "C. Volume Mirrored (Raid 1)",
      "D. Volume Striped ( Raid 0)",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 56: Đối với server 2008 dung lượng RAM khuyến khích (Recommended) là bao nhiêu GB?",
    answers: ["A. 3GB", "B. 512MB", "C. 1BG", "D. 2GB"],
    correctAnswer: "D",
  },
  {
    question: "Question 57: Hãy cho biết giao thức được sử dụng để gửi mail?",
    answers: ["A. SMTP", "B. FTP", "C. POP3", "D. HTTP"],
    correctAnswer: "A",
  },
  {
    question:
      "Question 58: Muốn giấu biểu tượng Recycle Bin trên màn hình Desktop ta thực hiện?",
    answers: [
      "A. User Configuration /Administrator Templates /Desktop / Remove Recycle Bin icon from desktop/Not Configured",
      "B. Cả 3 đáp án đều sai",
      "C. User Configuration /Administrator Templates /Desktop / Remove Recycle Bin icon from desktop/disble",
      "D. User Configuration /Administrator Templates /Desktop / Remove Recycle Bin icon from desktop/enable",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 59: Muốn chặn một dãy IP nào không muốn cấp cho client thì ta làm sao?",
    answers: [
      "A. Cấu hình trong Exclusion Range",
      "B. Cấu hình trong Feature",
      "C. Cấu hình trong Role",
      "D. Cấu hình trong Address",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 60: Bạn đang cấu hình Sharing Permission cho một thư mục chia sẻ trên File server. Bạn muốn nhóm Authenticated Users có khả năng đọc các tệp tin trong thư mục, và riêng những tệp tin mà là chủ sở hữu thì họ có thể sửa nội dung hay xóa đi. Bạn sẽ cấp phép như nào?",
    answers: [
      "A. Authenticated Users - Read",
      "B. Authenticated Users - Read",
      "C. Authenticated Users - Read",
      "D. Create Owner - Change",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 61: Trong chính sách kiểm toán, chính sách Audit Logon Events là gì?",
    answers: [
      "A. Ghi nhận việc thay đổi trong chính sách kiểm toán",
      "B. Ghi nhận việc truy cập các dịch vụ thư mục",
      "C. Ghi nhận các sự kiện liên quan đến quá trình Logon",
      "D. Ghi nhận việc truy cập các tập tin, thư mục và máy in",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 62: Để bắt đầu quản lý Web Server, bạn vào start / programs / administrative tools, chọn",
    answers: [
      "A. Web server manager",
      "B. Internet information services (IIS) manager",
      "C. Password Account Policy",
      "D. Password Domain Policy",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 63: Để cho phép Read-Only Domain Controller server có thể đồng bộ mật khẩu với Domain Controller chính, bạn cần cấu hình?",
    answers: [
      "A. Password Replication Policy",
      "B. Password Group Policy",
      "C. Password Account Policy",
      "D. Password Domain Policy",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 64: Trong chính sách kiểm toán, chính sách Audit Policy Change là gì?",
    answers: [
      "A. Ghi nhận các sự kiện liên quan đến quá trình Logon",
      "B. Ghi nhận việc truy cập các dịch vụ thư mục",
      "C. Ghi nhận việc thay đổi trong chính sách kiểm toán",
      "D. Ghi nhận việc truy cập các tập tin, thư mục và máy in",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 65: Tài khoản có tên là Administrator là tài khoản gì trên hệ điều hành windows?",
    answers: [
      "A. Tài khoản cài đặt máy tính",
      "B. Tài khoản user thông thường",
      "C. Tài khoản quản trị máy tính",
      "D. Tài khoản để cứu hộ máy tính",
    ],
    correctAnswer: "C",
  },
  {
    question: "Question 66: Domain tree là gì?",
    answers: [
      "A. Là cấu trúc bao gồm nhiều domain được sắp xếp các cấp bậc theo cấu trúc hình cây.",
      "B. Là cấu trúc bao gồm nhiều domain được sắp xếp các cấp bậc theo cấu trúc hình gấp khúc.",
      "C. Là cấu trúc bao gồm nhiều domain được sắp xếp các cấp bậc theo cấu trúc hình tròn.",
      "D. Là cấu trúc bao gồm nhiều domain được sắp xếp các cấp bậc theo cấu trúc hình vuông.",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 67: Bạn muốn xem địa chỉ MAC (địa chỉ vật lý) của card mạng, bạn nên làm gì?",
    answers: [
      "A. Vào DOS, gõ lệnh Net view \\\\server1",
      "B. Từ Device Manager snap-in, xem properties của card mạng",
      "C. Từ services snap-in, xem properties của card kết nối",
      "D. Vào DOS, gõ lệnh Ipconfig \\all",
    ],
    correctAnswer: "D",
  },
  {
    question: "Question 68: Record MX dùng làm gì?",
    answers: [
      "A. Dùng để backup",
      "B. Dùng cho dịch vụ FTP",
      "C. Cho dịch vụ chuyển mail",
      "D. Cho dịch vụ chuyển gói tin",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 69: Để kết nối (join) các máy trạm trong hệ thống mạng nội bộ vào domain, bạn thực hiện?",
    answers: [
      "A. Chọn start, chọn RUN, gõ lệnh CMD, nhấn OK, gõ tiếp lệnh DCPROMO vào cửa sổ CMD và nhấn Enter.",
      "B. Kích chuột phải vào biểu tượng My Computer, chọn Properties, trên tab Computer Name, chọn Change, nhập tên domain vào mục Workgroup, chọn OK, nhập tên và mật khẩu của tài khoản Administrator của máy domain, chọn OK.",
      "C. Chọn start, chọn RUN, gõ lệnh DCPROMO vào cửa sổ RUN và nhấn Enter.",
      "D. Kích chuột phải vào biểu tượng My Computer, chọn Properties, trên tab Computer Name, chọn Change, nhập tên domain vào mục Domain, chọn OK, nhập tên và mật khẩu của tài khoản Administrator của máy domain, chọn OK.",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 70: Cơ chế chứng thực chính nào được dùng vào máy phục vụ Web an toàn?",
    answers: ["A. SSL/TLS", "B. L2TP", "C. PPTP", "D. STPP"],
    correctAnswer: "A",
  },
  {
    question:
      "Question 71: Domain Security Policy các tùy chỉnh trong này sẽ tác động lên đâu?",
    answers: [
      "A. Tác động lên DC trên Domain",
      "B. Tác động lên DC và User trên Domain",
      "C. Tác động lên Local",
      "D. Tác động lên User trên Domain",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 72: Any quên mật khẩu truy nhập vào sau khi đăng nhập vài lần với mật khẩu sai, Any nhận được thông báo tài khoản đã bị vô hiệu hóa (disable) hoặc khóa (lock out). Thông báo này nhắc Any phải hỏi người quản trị. Người quản trị sẽ làm gì để giúp Any",
    answers: [
      "A. Đổi tên tài khoản Any",
      "B. Mở khóa (unlock) tài khoản của Any",
      "C. Đặt lại mật khẩu của Any",
      "D. Xóa tài khoản của Any và tạo lại",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 73: Để cập nhật tất cả thông tin vào Group Policy. Bạn thực hiện câu lệnh nào sau đây",
    answers: [
      "A. Run / cmd, gõ groupupdate /force",
      "B. Run / cmd, gõ gpupdate /force",
      "C. Run / cmd, gõ gpoupdate /force",
      "D. Run / cmd, gõ update /force",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 74: Muốn gán một địa chỉ IP cho một máy tính cố định nào đó thì ta cấu hình ở đâu?",
    answers: ["A. Role", "B. Exclusion Range", "C. Reservation", "D. Feature"],
    correctAnswer: "C",
  },
  {
    question:
      "Question 75: Để đưa user KT1 đã tạo trước đó vào OU KeToan, bạn thực hiện",
    answers: [
      "A. Chuột phải vào KT1 / Chọn Move .../ Xuất hiện hộp thoại, chọn đến OU KeToan / chọn OK.",
      "B. Chuột phải vào KT1 / Chọn Add to a group .../ Xuất hiện hộp thoại, gõ vào KeToan / Chọn Check Names / chọn OK.",
      "C. Chuột phải vào KT1 / Chọn Copy .../ Xuất hiện hộp thoại, chọn đến OU KeToan / chọn OK.",
      "D. Chuột phải vào group KeToan / Properties / Members / Add / Xuất hiện hộp thoại, gõ vào KT1 / Chọn Check Names / chọn ΟΚ.",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 76: Số máy windows 2008 Server làm Domain Controller tối đa trong một domain là?",
    answers: ["A. Cả 3 đáp án còn lại đều sai", "B. 3", "C. 1", "D. 2"],
    correctAnswer: "A",
  },
  {
    question:
      "Question 77: Bạn là quản trị mạng của một tổ chức. Tổ chức đang chuẩn bị triển khai một tường lửa để cung cấp một kết nối an toàn giữa mạng bên trong và Internet. Nhân viên an ninh cho tổ chức đặc biệt quan tâm về sự tấn công của các virus mới nhất. Bạn cần đảm bảo rằng tường lửa của bạn có thể ngăn chặn các kiểu tấn công này. Chức năng nào của tường lửa sẽ cần để cài đặt để ngăn chặn các kiểu tấn công này? :",
    answers: [
      "A. Application filtering (lọc ứng dụng)",
      "B. Packet filtering (lọc gói)",
      "C. Stateful filtering (lọc trạng thái)",
      "D. Intrusion detection (phát hiện xâm nhập)",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 78: Mục nào trong Group Policy cho phép khóa 1 User hoặc 1 Group Local không cho Login vào windows :",
    answers: [
      "A. Account lock out duration",
      "B. Deny logon locally",
      "C. Deny logon through Terminal Services",
      "D. Deny logon as a services",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 79: Silas muốn tạo một tài khoản user cục bộ trên máy tính windows 7. Anh cần sử dụng công cụ gì :",
    answers: [
      "A. Computer Manager",
      "B. Local Users and Groups",
      "C. Active Directory Users and Groups",
      "D. User Manager",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 80: IP security hoạt động ở tầng thứ mấy của mô hình OSI :",
    answers: ["A. 3", "B. 2", "C. 5", "D. 4"],
    correctAnswer: "A",
  },
  {
    question:
      "Question 81: Để cài đặt IIS 7.0 Web server, bạn nhớ cửa sổ server manager. Trong khung Roles Summary, bấm Add Roles, trong màn hình Select Server Roles, chọn:",
    answers: [
      "A. UDDI Server",
      "B. Windows deployment server",
      "C. Application",
      "D. Web server (IIS)",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 82: Trong chính sách mật khẩu của server 2008 thì chính sách “Enforce password history” sẽ lưu trữ tối đa bao nhiêu password cũ?",
    answers: ["A. 26", "B. 28", "C. 30", "D. 24"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 83: Số lượng đĩa tối thiểu cho phép tạo một RAID 5 - Volume?",
    answers: ["A. 3", "B. 32", "C. 1", "D. 2"],
    correctAnswer: "A",
  },
  {
    question:
      "Question 84: Trong chính sách kiểm toán, chính sách Audit Directory Server Access là gì?",
    answers: [
      "A. Ghi nhận việc truy cập các tập tin, thư mục và máy in",
      "B. Ghi nhận việc truy cập các dịch vụ thư mục",
      "C. Ghi nhận các sự kiện liên quan đến quá trình Logon",
      "D. Ghi nhận việc thay đổi trong chính sách kiểm toán",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 85: Trong cơ chế hoạt động của DHCP khi máy client muốn xin IP thì nó gửi gói tin gì ra?",
    answers: [
      "A. DHCPREQUEST",
      "B. DHCPOFFER",
      "C. DHCPACK",
      "D. DHCPDISCOVER",
    ],
    correctAnswer: "D",
  },
  {
    question: "Question 86: Hãy cho biết giao thức được sử dụng nhận mail?",
    answers: ["A. HTTP", "B. SMTP", "C. POP3", "D. RDP"],
    correctAnswer: "C",
  },
  {
    question:
      "Question 87: Giới hạn tài khoản user có password trắng đăng nhập, là chính sách nào dưới đây?",
    answers: [
      "A. Account rename guest account",
      "B. Interactive logon: do not display last username",
      "C. Cả 3 đáp án còn lại đều sai",
      "D. Account: limit account use of blank passwords to console logon only.",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 88: Muốn giới hạn thời gian user được phép đăng nhập vào hệ thống mạng (mặc định đăng nhập 24/24), bạn thực hiện?",
    answers: [
      "A. Nhấp đôi chuột lên user vừa tạo để mở hộp thoại Properties, chọn tab Account, bấm nút Logon Days",
      "B. Nhấp đôi chuột lên user vừa tạo để mở hộp thoại Properties, chọn tab Account, bấm nút Log on to",
      "C. Nhấp đôi chuột lên user vừa tạo để mở hộp thoại Properties, chọn tab Account, bấm nút Login Hours",
      "D. Nhấp đôi chuột lên user vừa tạo để mở hợp Properties, chọn tab Account, bấm nút Logon Hours",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 89: Sau khi tạo OU có tên Nhanvien trên máy chủ window 2008 domain controller. Anh / chị muốn tạo account “minhnv” và Account này sẽ thuộc OU Nhanvien. Mở công cụ active Directory User and Computer và thực hiện như thế nào?",
    answers: [
      "A. Nhấp chuột phải vào OU Nhanvien chọn New / Group",
      "B. Nhấp chuột phải vào OU Nhanvien chọn New / organizational Unit",
      "C. Nhấp chuột phải vào OU Nhanvien chọn New / User",
      "D. Cả 3 đều sai",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 90: Trong chính sách mật khẩu, chính sách Account Lockout threshold là gì?",
    answers: [
      "A. Quy định số lần cố gắng đăng nhập trước khi tài khoản bị khóa",
      "B. Quy định thời gian đếm lại số lần đăng nhập không thành công",
      "C. Quy định thời gian khóa tài khoản",
      "D. Quy định thời gian từ lần đăng nhập mật khẩu sai này tới lần nhập mật khẩu tiếp theo",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 91: Để bổ sung các user vào group vừa tạo, bạn nhấp đôi chuột lên group tương ứng để mở hộp thoại Properties, sau đó:",
    answers: [
      "A. Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS. Kích chuột phải lên mục Forward Lookup Zones, chọn New Zone.",
      "B. Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS / Chọn Zone. Kích chuột phải lên Zone, chọn new Alias.",
      "C. Trên tab member / chọn Add",
      "D. Nhân giữ user và khéo thẻ vào hộp thoại properties",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 92: Để cấu hình DNS Server chính (phân giải địa chỉ IP thành tên), bạn thực hiện",
    answers: [
      "A. Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS. Kích chuột phải lên mục Forward Lookup Zones, chọn New Zone.",
      "B. Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS / Chọn Zone. Kích chuột phải lên Zone, chọn new Alias.",
      "C. Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS / Chọn Zone. Kích chuột phải lên Zone, chọn new Host.",
      "D. Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS. Kích chuột phải lên mục Reverse Lookup Zones, chọn New Zone.",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 93: Hai tài khoản user cục bộ nào tự động được tạo ra khi cài windows 7",
    answers: [
      "A. Administrator và Power User",
      "B. Administrators và Guests",
      "C. Administrators và Power Users",
      "D. Administrators và Guest",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 94: Bạn vô tình xóa mất một OU trong Active Directory, tuy nhiên bạn đã Backup System State trên một máy Domain Controller trong mạng. Bạn hãy cho biết bạn sẽ làm thế nào trên Domain Controller này để có thể khôi phục được OU bị xóa mất ở trên?",
    answers: [
      "A. Khởi động lại Domain controller một cách bình thường",
      "B. Khởi động lại domain controller và chọn Recovery Console",
      "C. Khởi động lại domain controller và chọn vào Safe mode",
      "D. Khởi động lại domain controller và chọn vào Directory Services Restore mode",
    ],
    correctAnswer: "D",
  },
  {
    question: "Question 95: Hệ thống file nào sau đây cho phép bảo mật nội bộ?",
    answers: ["A. HPFS", "B. FAT32", "C. FAT16", "D. NTFS"],
    correctAnswer: "D",
  },
  {
    question: "Question 96: Dịch vụ DNS server có chức năng chính là gì?",
    answers: [
      "A. Phân giải tên netbios",
      "B. Phân giải địa chỉ MAC",
      "C. Cả 3 đáp án còn lại đều sai",
      "D. Phân giải tên miền (IP sang tên và ngược lại)",
    ],
    correctAnswer: "D",
  },
  {
    question: "Question 97: Để đưa user KT1 vào group KeToan, bạn thực hiện",
    answers: [
      "A. Chuột phải vào group KeToan /Properties /Members of / Add / Xuất hiện hộp thoại, gõ vào KT1 / chọn Check Names / Chọn OK.",
      "B. Chuột phải vào KT1 / Chọn copy …/ Xuất hiện hộp thoại, chọn đến group KeToan / chọn OK",
      "C. Chuột phải vào KT1 / Chọn Move…/ Xuất hiện hộp thoại, chọn đến group KeToan / chọn OK",
      "D. Chuột phải vào user KT1 / Chọn Add to a group …/ Xuất hiện hộp thoại, gõ vào KeToan / chọn Check Names / chọn OK.",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 98: Bạn cài đặt và cấu hình máy chủ DNS mới trong domain và bạn quyết định các máy trạm sẽ sử dụng máy chủ mới này. Trên máy chủ DHCP bạn cấu hình lại Scope Option 006 chỉ vào máy chủ mới. Bạn sử dụng lệnh ipconfig / release và ipconfig / renew trên tất cả các máy trạm sau đó sử dụng lệnh ipconfig / all để kiểm tra lại và nhận được kết quả như sau. Có hai máy trạm không nhận được địa chỉ DNS Server mới này, các máy trạm còn lại đã nhận được. Trên hai máy trạm vẫn sử dụng máy chủ DNS cũ này, bạn kiểm tra cấu hình TCP / IP trên kết nối cục bộ (Local Area Connection) bạn nhận thấy cả hai đều được cấu hình để nhận địa chỉ một cách tự động. Bạn sẽ phải làm gì tiếp theo?",
    answers: [
      "A. Cấu hình hai máy trạm nhận địa chỉ của máy chủ DNS một cách thủ công (manual) và nhập vào địa chỉ IP của máy chủ DNS mới",
      "B. Cấu hình lại server option 006",
      "C. Cấu hình lại Reserved Client Option 006 của hai máy trạm, sau đó chạy lại lệnh ipconfig /release và ipconfig /renew",
      "D. Chạy lệnh ipconfig /flushdns trên hai máy trạm này",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 99: Người dùng bị quên mật khẩu nhưng lại cố tình đăng nhập nhiều lần với mật khẩu sai. Rốt cục người dùng nhận được một thông báo tài khoản đã bị vô hiệu hóa hoặc bị khóa và đề nghị liên hệ với quản trị mạng. Khi đó người quản trị sẽ phải làm gì?",
    answers: [
      "A. Kích hoạt lại tài khoản người dùng",
      "B. Xóa đối tượng người dùng và tạo lại",
      "C. Đổi tên đối tượng người dùng",
      "D. Đặt lại mật khẩu đối tượng người dùng",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 100: Để đăng nhập một máy con vào một máy DC bạn phải đảm bảo những yêu cầu nào sau đây?",
    answers: [
      "A. Khi báo primary DNS Suffix",
      "B. Cả 3 đáp án còn lại đều đúng",
      "C. Khai báo IP DNS",
      "D. Thay đổi môi trường workgroup thành Domain",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 101: Trong mạng Domain có thiết lập các chính sách về GPO, một máy client có tồn tại chính sách cục bộ trên nó. Máy sẽ thực hiện các chính sách thế nào?",
    answers: [
      "A. Thực hiện chính sách của GPO trước, chính sách cục bộ sau",
      "B. Chỉ thực hiện các chính sách của GPO",
      "C. Thực hiện chính sách cục bộ trước, chính sách của GPO sau",
      "D. Thực hiện song song",
    ],
    correctAnswer: "C",
  },
  {
    question: "Question 102: Share Permission có bao nhiêu lựa chọn?",
    answers: [
      "A. Read, Modify, Full Control",
      "B. Read, Modify, Change, Full Control, Write",
      "C. Read, Change, Full Control",
      "D. Read, Modify, Change, Full Control",
    ],
    correctAnswer: "C",
  },
  {
    question: "Question 103: Chức năng nào là đúng của Group Policy?",
    answers: [
      "A. Thi hành một vài chính sách không cần thiết cho Admin",
      "B. Xóa tài khoản Administrator",
      "C. Giới hạn những ứng dụng mà người dùng được phép thi hành",
      "D. Xóa bỏ phần mềm của admin",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 104: Ta có folder data áp cho các user chịu các permission của Share Full control và NTFS là Modify thì những user đó chịu quyền gì?",
    answers: ["A. Full control", "B. Write", "C. Change", "D. Modify"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 105: Để áp những chính sách lên trên máy tính thì ta cấu hình ở đâu?",
    answers: [
      "A. User Configuration.",
      "B. Computer configuration",
      "C. Local user and Group",
      "D. Local policy",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 106: Giúp cho máy ảo có thể ra internet và trao đổi dữ liệu với máy thật ta sử dụng VMnet mấy?",
    answers: ["A. VMnet 2", "B. VMnet 8", "C. VMnet 0", "D. VMnet 1"],
    correctAnswer: "C",
  },
  {
    question:
      "Question 107: Nguyên tắc nào sau đây không đúng khi tạo user trên windows 7?",
    answers: [
      "A. 1 User name có thể dài đến 20 ký tự",
      "B. User name có phân biệt chữ thường và chữ hoa",
      "C. Ký tự * không được dùng để đặt tên user name",
      "D. Password user có phân biệt chữ thường và chữ hoa",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 108: Muốn chia sẻ ẩn một thư mục trong ổ đĩa với tên chia sẻ là Dungchung thì trong ô Share name, nhập chuỗi ký tự nào sau?",
    answers: [
      "A. Dungchung%",
      "B. Dungchung",
      "C. Dungchung\\",
      "D. Dungchung$",
    ],
    correctAnswer: "D",
  },
  {
    question: "Question 109: Mạng ứng dụng Domain được xây dựng từ",
    answers: [
      "A. Mô hình xử lý tập trung và mô hình quản lý tập trung",
      "B. Mô hình xử lý cộng tác và mô hình quản lý tập trung",
      "C. Mô hình xử lý phân phối và mô hình quản lý tập trung.",
      "D. Mô hình xử lý tập trung và mô hình quản lý Workgroup",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 110: Bạn là quản trị mạng của Công ty ABC trên Server có 2 phân vùng C và D (C được định dạng là NTFS, D được định dạng FAT32). Trong C có chứa thư mục Data đã được thiết lập một số quyền hạn, do nhu cầu sử dụng nên thư mục Data cần di chuyển sang D. Sau khi di chuyển thư mục thì các quyền hạn trên thư mục này sẽ thay đổi như thế nào",
    answers: [
      "A. Folder, file trong thư mục Data và thư mục Data đó sẽ mất quyền NTFS",
      "B. Folder hoặc file trong thư mục Data vẫn giữ nguyên quyền",
      "C. Folder trong thư mục Data mất quyền, file trong thư mục Data vẫn giữ nguyên quyền",
      "D. Folder trong thư mục Data giữ nguyên quyền, file trong thư mục Data mất quyền",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 111: Trong màn hình Choose a Deployment Configuration, để cấu hình Domain Controller trên một domain trong một forest mới, bạn chọn:",
    answers: [
      "A. Add a domain controller to an existing domain.",
      "B. Create a new domain in an existing forest",
      "C. Create a new domain in a new forest",
      "D. Existing forest",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 112: Sau khi cập nhật mới trình cài đặt và muốn kiểm tra máy in bằng cách in thử một trang. Hộp thoại Properties nào cho phép thực hiện công việc này ?",
    answers: [
      "A. General",
      "B. Device Settings",
      "C. Advanced",
      "D. Print Management",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 113: Hỗ trợ chính sách bảo mật cục bộ là định dạng đĩa nào?",
    answers: ["A. Cả 3 đều sai", "B. FAT16", "C. NTFS", "D. FAT32"],
    correctAnswer: "C",
  },
  {
    question:
      "Question 114: Bạn là người dùng trong mạng. Khi muốn truy nhập các thư mục chia sẻ trên máy chủ có tên SERVER, bạn vào Start / Run và gõ vào dòng lệnh nào sau đây?",
    answers: [
      "A. \\\\SERVER",
      "B. \\\\SERVER\\CHIASE",
      "C. \\\\SERVER$",
      "D. //SERVER",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 115: Trong chế độ mặc định của windows server 2008 thì những nhóm hay user nào được đăng nhập vào server 2008?",
    answers: ["A. Nhóm administrator", "B. user", "C. Nhóm user", "D. guest"],
    correctAnswer: "A",
  },
  {
    question:
      "Question 116: Muốn cho những phần mềm nào được phép chạy cho những user thì ta làm sao?",
    answers: [
      "A. Configuration Computer / System / Don't run specified win application",
      "B. Configuration User / Control Panel / Don't run specified win application",
      "C. Configuration User / System / Don't run specified win application",
      "D. Configuration Computer / Control Panel / Don't run specified win application",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 117: Hệ điều hành nào được nâng cấp lên Windows server 2008 Datacenter?",
    answers: [
      "A. Windows server 2003 R2 Enterprise",
      "B. Windows server 2003 R2 Datacenter",
      "C. Windows server 2003 Enterprise (SP1)",
      "D. Windows server 2003 R2 Standard",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 118: Ta có folder data áp cho các user chịu các permission của share là Read và NTFS là Full control thì những user đó chịu quyền gì ?",
    answers: ["A. Full control", "B. Write", "C. Change", "D. Read"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 119: Ta có folder data áp cho các user chịu các permission của share là Full control và NTFS là Read thì những user đó chịu quyền gì ?",
    answers: ["A. Full control", "B. Write", "C. Change", "D. Read"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 120: Người dùng có tên là Hải khi truy nhập một thư mục chia sẻ trên máy bạn, cô ấy tạo 1 thư mục con trong đó, khi đó cô ấy nhận được 1 thông báo lỗi là “Access is denied”. Bạn nên cấp quyền gì trong quyền chia sẻ để Hải có thể tạo được thư mục con trong thư mục chia sẻ?",
    answers: ["A. Read", "B. Write", "C. Không cấp được", "D. Change"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 121: Trong chính sách mật khẩu của server 2008 DC thì chính sách “Minimum password length” mặc định sẽ có ít nhất bao nhiêu ký tự?",
    answers: ["A. 7", "B. 6", "C. 8", "D. 9"],
    correctAnswer: "A",
  },
  {
    question:
      "Question 122: DHCP (Dynamic Host Configuration Protocol) server là",
    answers: [
      "A. Máy chủ được dùng để cấp phát địa chỉ IP động cho các máy trạm trong một hệ thống mạng",
      "B. Máy chủ được dùng để cấp phát DNS cho các máy trạm trong một hệ thống mạng",
      "C. Máy chủ được dùng để tạo các máy trạm động trong một hệ thống mạng.",
      "D. Máy chủ được dùng để cấp phát địa chỉ IP tĩnh cho các máy trạm trong một hệ thống mạng",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 123: Một người dùng quên mật khẩu của mình. Anh ta cố gắng đăng nhập hệ thống và nhận được thông báo lỗi nói rằng tài khoản của anh ta bị khóa và đề nghệ anh ta liệ hệ với người quản trị. Bạn là người quản trị, bạn phải là gì?",
    answers: [
      "A. Enable tài khoản.",
      "B. Đặt lại mật khẩu cho tài khoản",
      "C. Mở khóa (Unlock) tài khoản",
      "D. Đổi tên tài khoản",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 124: Trong màn hình Choose a Deploy Configuration, để cấu hình Read Only Domain Controllers (RODC), bạn được:",
    answers: [
      "A. Add a domain controller to an existing domain",
      "B. Create a new domain in an existing forest",
      "C. More about possible deployment configuration",
      "D. Create a new  domain in a new forest",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 125: Ta có folder data áp cho các user chịu các permission của Share là Full Control và NTFS là Full Control thì những user đó chịu quyền gì?",
    answers: [
      "A. Không được truy cập (rỗng)",
      "B. Write",
      "C. Read",
      "D. Full control",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 126: Công cụ nào sau đây cung cấp thông tin về các chương trình và quá trình đang chạy (thực thi) trên máy tính?",
    answers: [
      "A. Task Manager",
      "B. Add/Remove Program",
      "C. Computer Management",
      "D. Biểu tượng System trong Control Panel",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 127: Trong màn hình Choose a Deployment Configuration, để cấu hình Child Domain, bạn chọn?",
    answers: [
      "A. Create a new domain in a new forest",
      "B. Create a new domain in a forest",
      "C. Create a domain in a new forest",
      "D. Create a new domain in an existing forest.",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 128: Có ít nhất bao nhiêu server làm chức năng điều khiển vùng?",
    answers: ["A. 2", "B. 4", "C. 3", "D. 1"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 129: Windows server 2008 hỗ trợ những loại Dynamic volume nào?",
    answers: [
      "A. simple, spanned, stiped, mirrored",
      "B. simple, spanned, stiped, mirrored và Rain-5",
      "C. simple, spanned",
      "D. simple, spanned, striped",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 130: Trong chính sách mật khẩu của server 2008 thì chính sách “Minimum password age” mặc nhiên quy định sau bao nhiêu ngày mới được đổi password?",
    answers: ["A. 0", "B. 2", "C. 1", "D. 3"],
    correctAnswer: "C",
  },
  {
    question:
      "Question 131: Để nâng cao bảo mật trong mạng bạn thực hiện chính sách Maximum Password Age là 7 ngày. Chính sách này sẽ yêu cầu người sử dụng phải đổi mật khẩu hàng tuần. Tuy nhiên sau một thời gian bạn nhận thấy có một vài người sử dụng sau khi đổi sang mật khẩu mới lại đổi ngay về mật khẩu cũ. Bạn sẽ sử dụng chính sách nào dưới đây để tránh tình trạng này?",
    answers: [
      "A. Password must meet complexity requirements properties",
      "B. Minimum Password Age",
      "C. Minimum password length",
      "D. Enforce password history",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 132: Để cập nhật tất cả thông tin vào Group policy. Bạn thực hiện câu lệnh nào sau đây?",
    answers: [
      "A. UPDATE /FORCE",
      "B. GPUPDATE /FORCE",
      "C. GROUPUPDATE /FORCE",
      "D. GPDATE /FORCE",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 133: Trong chế độ mặc định thì chính sách mật khẩu của server 2008 là",
    answers: [
      "A. Phức tạp",
      "B. Đơn giản",
      "C. Chữ hoa và chữ thường",
      "D. Bình thường",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 134: Để đăng nhập một máy con vào một máy DC bạn phải đảm bảo những yêu cầu nào sau đây?",
    answers: [
      "A. Khai báo primary DNS Suffic",
      "B. Cả 3 đáp án còn lại đều đúng.",
      "C. Thay đổi môi trường workgroup thành Domain.",
      "D. Khai báo IP DNS.",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 135: Sau khi tạo OU có tên Nhanvien trên máy chủ Window 2008 domain controller, bạn muốn tạo nhóm tên Kinhdoanh và nhóm này sẽ thuộc OU Nhanvien. Mở công cụ Active Directory User and Computer và thực hiện như thế nào?",
    answers: [
      "A. Nhấp chuột phải vào OU Nhanvien chọn New / Group",
      "B. Nhấp chuột phải vào OU Nhanvien chọn New / User.",
      "C. Cả 3 đáp án đều sai.",
      "D. Nhấp chuột phải vào OU Nhanvien chọn New / Organizational Unit.",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 136: Dịch vụ nào được sử dụng để truyền các tập tin (file) giữa 2 máy tính sử dụng giao thức TCP?",
    answers: ["A. NNTP", "B. FTP.", "C. HTTP.", "D. SNMP"],
    correctAnswer: "B",
  },
  {
    question: "Question 137: Đặc điểm nào mô tả về mô hình mạng Workgroup:",
    answers: [
      "A. Các máy tính trong mạng có vai trò như nhau.",
      "B. Cả 3 đáp án còn lại đều sai.",
      "C. Hoạt động theo cơ chế Client-Server.",
      "D. Có ít nhất một Server làm trung tâm",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 138: Nhóm built in nào có quyền share trong domain controller:",
    answers: [
      "A. Server Operators.",
      "B. Power users.",
      "C. Power Operators.",
      "D. Users",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 139: Trong chính sách mật khẩu, mục Minimum password age dùng để:",
    answers: [
      "A. Quy định số ký tự tối thiểu của mật khẩu.",
      "B. Quy định số ngày tối thiểu người dùng được phép đổi mật khẩu.",
      "C. Thiết lập mật khẩu không cần độ phức tạp",
      "D. Quy định số ngày tối thiểu người dùng phải đổi mật khẩu",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 140: Sau khi nâng cấp lên DC thì mặc định tạo user yêu cầu password phức tạp. Password nào sau đây là phức tạp?",
    answers: ["A. Passwordpas.", "B. P@ssW0RD.", "C. passw1rd", "D. password"],
    correctAnswer: "B",
  },
  {
    question: "Question 141: Windows server 2008 hỗ trợ định dạng đĩa nào?",
    answers: ["A. NTFS", "B. Cả 3 đều đúng.", "C. FAT32", "D. FAT16"],
    correctAnswer: "A",
  },
  {
    question:
      "Question 142: Dịch vụ mạng nào sau đây có thể đảm bảo cho máy tính của bạn nhận được IP, subnet mask, default gateway, DNS?",
    answers: ["A. WINS", "B. DNS", "C. FPT", "D. DHCP"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 143: Để cấu hình DNS Server chính (phân giải tên thành địa chỉ IP), bạn thực hiện:",
    answers: [
      "A. Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS / Chọn Zone. Kích chuột phải lên Zone, chọn new Host.",
      "B. Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS. Kích chuột phải lên mục Reverse Lookup Zones, chọn New Zone.",
      "C. Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS. Kích chuột phải lên mục Forward Lookup Zones, chọn New Zone.",
      "D. Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS / Chọn Zone. Kích chuột phải lên Zone, chọn new Alias.",
    ],
    correctAnswer: "C",
  },
  {
    question: "Question 144: Đặc điểm nào mô tả về mô hình mạng domain?",
    answers: [
      "A. Quá trình chứng thực người dùng đăng nhập diễn ra tập trung tại máy Domain Controller.",
      "B. Các máy tính trong mạng có vai trò như nhau.",
      "C. Thông tin tài khoản người dùng lưu trong tập tin SAM.",
      "D. Quá trình chứng thực người dùng đăng nhập diễn ra tại máy cục bộ mà user đăng nhập",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 145 : Khi thiết lập chính sách hệ thống ở mục Domain Security Policy thì các chính sách này sẽ có",
    answers: [
      "A. Phạm vi tác động lên các máy Client trong miền",
      "B. Phạm vi tác động lên cả Site",
      "C. Phạm vi tác động trên các máy Domain Controller",
      "D. Phạm vi tác động lên toàn miền",
    ],
    correctAnswer: "D",
  },
  {
    question: "Question 146 : Những nhóm nào không phải là nhóm bảo mật ?",
    answers: ["A. SID", "B. Domain Local", "C. Global", "D. Local"],
    correctAnswer: "A",
  },
  {
    question:
      "Question 147 :  Trong môi trường domain, dịch vụ nào quản lý thông tin người dùng ?",
    answers: ["A. DHCP.", "B. Active Directory", "C. DNS", "D. MAIL"],
    correctAnswer: "B",
  },
  {
    question: "Question 148 : Volume spanned có công dụng gì ?",
    answers: [
      "A. Giảm kích thước của volume",
      "B. Tăng kích thước của volume",
      "C. Giảm lỗi trong quá trình ghi chép",
      "D. Tăng tốc cho quá trình ghi dữ liệu",
    ],
    correctAnswer: "B",
  },
  {
    question: "Question 149 : Volume đĩa nào giúp tăng hiệu suất hoạt động ?",
    answers: [
      "A. Volume Raid - 5",
      "B. Volume Simple",
      "C. Volume Spanned",
      "D. Volume mirrored (Raid 1)",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 150 : Quyền Full Control trong cấu hình share permission thì ý nào là đúng ?",
    answers: [
      "A. Cả 3 phương án còn lại đều đúng",
      "B. Xóa tập tin trong thư mục chia sẻ",
      "C. Cho phép người dùng thay đổi dữ liệu trên tập tin",
      "D. Cho phép người dùng xem và thi hành các tập tin trong thư mục chia sẻ",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 151 : Khi sử dụng dịch vụ FTP . Kết nối vào FTP Server thì phần lớn FTP Server cho phép kết nối thông qua account nào ?",
    answers: ["A. Netuser", "B. Guest", "C. Anonymous", "D. Administrator"],
    correctAnswer: "C",
  },
  {
    question: "Question 152 : Port (Cổng) mặc định của giao thức HTTP là ?",
    answers: ["A. 23", "B. 81", "C. 8080", "D. 80"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 153 : Trên Windows Server 2008, có thể triển khai tất cả :",
    answers: [
      "A. 12 dịch vụ server",
      "B. 16 dịch vụ server",
      "C. 18 dịch vụ server",
      "D. 14 dịch vụ server",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 154 : Kích thước volume tối đa được hỗ trợ bao nhiêu GB của định dạng đĩa FAT32 ?",
    answers: ["A. 1024GB", "B. 16GB", "C. 32GB", "D. 64GB"],
    correctAnswer: "C",
  },
  {
    question: "Question 155 : Organizational Unit là gì ?",
    answers: [
      "A. Đơn vị trung bình trong AD",
      "B. Đơn vị nhỏ nhất trong AD",
      "C. Đơn vị nhỏ nhất trong Workgroup",
      "D. Đơn vị lớn nhất trong AD",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 156 : Lệnh nào dùng để kiểm tra các máy trong mạng có thể trao đổi thông tin được với nhau không ?",
    answers: ["A. ping", "B. nslookup", "C. ipconfig \\all", "D. ipconfig"],
    correctAnswer: "A",
  },
  {
    question:
      "Question 157 : Với File Services, bạn dễ dàng triển khai các chức năng :",
    answers: [
      "A. Services for Network File Systems : triển khai các dịch vụ cho phép chia sẻ file giữa Windows Server 2008 với các hệ thống *NIX",
      "B. Distributed File Systems: triển khai hệ thống file phân tán",
      "C. Cả 3 đáp án còn lại đều đúng",
      "D. File Services Resource Manager : cấu hình quota, tạo file screen và lập lịch tạo ra storage report",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 158 : Khi một Volume được định dạng NTFS thì permission mặc định của Volume đó là group Everyone sẽ có quyền gì ?",
    answers: ["A. Change", "B. Read", "C. Write", "D. Full Control"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 159 : Khi move một folder hay file trong cùng partition NTFS thì quyền truy cập NTFS như thế nào ?",
    answers: [
      "A. Folder hay file mất một số quyền gốc của nó",
      "B. Folder hay file vẫn duy trì các quyền gốc của nó",
      "C. Các quyền trên folder hay file sẽ mất đi",
      "D. Cả 3 đáp án còn lại đều sai",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 160 : Quyền gì sẽ áp đặt lên thư mục con khi ta áp đặt quyền NTFS lên thư mục cha của nó ?",
    answers: [
      "A. Giống quyền thư mục cha",
      "B. Read",
      "C. Write",
      "D. Full Control",
    ],
    correctAnswer: "A",
  },
  {
    question: "Question 161 : Thông tin tài khoản Domain chứa ở đâu ?",
    answers: ["A. SAM.DIT", "B. NTDS.DTT", "C. SAM", "D. NTDS.DIT"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 162 : Password Policies trong Active Directory Domain Services :",
    answers: [
      "A. Chính sách được áp đặt lên tất cả người dùng trong miền",
      "B. Có thể được cấu hình cho nhóm người dùng trong một WORKGROUP",
      "C. Có thể được cấu hình cho nhóm người dùng trong một OU",
      "D. Có thể được cấu hình cho nhóm người dùng trong một GROUP",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 163 : Lệnh nào được sử dụng để bắt đầu Microsoft Management Console (MMC) ?",
    answers: ["A. ADMINCONSOLE", "B. MMCONSOLE", "C. MMC", "D. MANAGECON"],
    correctAnswer: "C",
  },
  {
    question:
      "Question 164 : Khi máy client join vào Domain thì tài khoản nào được dùng chứng thực quá trình gia nhập đó ?",
    answers: [
      "A. user@domai.local",
      "B. teo@domai.local",
      "C. users",
      "D. Administator@domain.local",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 165 : Tên gọi của máy tính cài đặt hệ điều hành Windows Server 2008 trong môi trường WorkGroup là :",
    answers: [
      "A. Stand-alone Server",
      "B.Domain Controller (DC)",
      "C. Member Server",
      "D. Application",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 166 : Tên gọi của máy tính hệ điều hành Windows Server 2008 trong môi trường domain là ?",
    answers: [
      "A. Domain Controller (DC)",
      "B. Member Domain",
      "C. Stand-alone Server",
      "D. Member Server",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 167 : Khi tạo tài khoản mới ta có sự lựa chọn cho các chính sách password User must change password at next logon thì sẽ làm gì ?",
    answers: [
      "A. Lần đăng nhập tiếp theo sẽ phải đổi password",
      "B. Password không bao giờ hết hạn",
      "C. Tài khoản bị khóa",
      "D. Tài khoản đó không được thay đổi password",
    ],
    correctAnswer: "A",
  },
  {
    question: "Question 168 : Volume Raid-5 cần ít nhất bao nhiêu đĩa cứng ?",
    answers: [
      "A. 3 đĩa cứng",
      "B. 4 đĩa cứng",
      "C. 5 đĩa cứng",
      "D. 6 đĩa cứng",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 169 : Trên Windows 2008 Stand-alone Server, khi chia sẻ một thư mục thì quyền chia sẻ mặc định cho nhóm Everyone là gì ?",
    answers: ["A. Write", "B. Change", "C. Read", "D. Full Control"],
    correctAnswer: "C",
  },
  {
    question:
      "Question 170 : Kích thước Volume tối đa được hỗ trợ bao nhiêu GB trên định dạng đĩa FAT16 ?",
    answers: ["A. 16GB", "B. 64GB", "C. 1024GB", "D. 4GB"],
    correctAnswer: "D",
  },
  {
    question: "Question 171 : Lệnh IPCONFIG /RELEASE dùng để :",
    answers: [
      "A. Cấp phát địa chỉ IP cho máy",
      "B. Thay đổi địa chỉ IP của máy",
      "C. Xóa địa chỉ IP của máy",
      "D. Cấu hình địa chỉ IP của máy",
    ],
    correctAnswer: "C",
  },
  {
    question: "Question 172 : Port 80 là của dịch vụ nào ?",
    answers: ["A. Mail", "B. DHCP", "C. Web", "D. DNS"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 173 : Tiện ích nào giúp bạn quản lý đĩa (partitions, logical drivers, dynamic volumes…)?",
    answers: [
      "A. Local Disk and Volumes",
      "B. Disk Administrator",
      "C. Disk Management",
      "D. Disk Manager",
    ],
    correctAnswer: "C",
  },
  {
    question: "Question 174 : Phát biểu nào sau đây là đúng :",
    answers: [
      "A. Active Directory là dịch vụ tập tin (file service), là nơi lưu trữ thông tin về các đối tượng (object) như users, groups, computers, … trong hệ thống mạng.",
      "B. Active Directory là dịch vụ để lưu trữ các thư mục chia sẻ trên máy chủ",
      "C. Active Directory là dịch vụ thư mục (directory service), là nơi lưu trữ thông tin về các đối tượng (object) như users, groups, computers, … trong hệ thống mạng.",
      "D. Active Directory là dịch vụ để lưu trữ các tài nguyên chia sẻ trên máy chủ",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 175 : Trên máy tính PC1 bạn chia sẻ thư mục Data với nhóm Everyone có quyền là Full Control. Trên PC2 khi truy cập vào thư mục Data chia sẻ từ PC1 thì xuất hiện thông báo Access Denied. Để truy cập vào Data phải thực hiện ?",
    answers: [
      "A. Add nhóm Domain User",
      "B. Phân quyền NTFS permission cho nhóm Everyone",
      "C. Remove nhóm Everyone",
      "D. Bổ sung nhóm Administrator - Full Control",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 176 : Theo chính sách của công ty bạn, tất cả các công việc của người quản trị liên quan đến các tài khoản như tạo ra, xóa, đổi  tên tài khoản, cũng như tạo ra, xóa , đổi tên các nhóm và thay đổi mật khẩu, vô hiệu hóa (disable) tài khoản đều phải được kiểm soát. Các sự kiện này sẽ lưu trữ trong nhật ký bảo mật (Security Log). Theo chính sách này bạn thay đổi GPO mặc định của Domain. Hãy cho biết bạn phải thực hiện kiểm soát sự kiện (event) nào dưới đây ?",
    answers: [
      "A. Audit Successful Account Logon Events",
      "B. Audit Successful Account Management",
      "C. Audit Successful Privilege Use",
      "D. Audit Failed Account Logon Events",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 177 : Những bước nào sau đây có thể tạo ra  Organization Unit (OU) ?",
    answers: [
      "A. Start / Programs / Administrative Tools / Active Directory Domain And Trust / Click tên miền chọn biểu tượng tạo OU.",
      "B. Start / Programs / Administrative Tools / Domain Controller Security Policy / Click tên miền chọn biểu tượng tạo OU.",
      "C. Start / Programs / Administrative Tools / Active Directory Users and Computer  / Click tên miền chọn biểu tượng tạo OU.",
      "D. Start / Programs / Administrative Tools / Domain Policy / Click tên miền chọn biểu tượng tạo OU.",
    ],
    correctAnswer: "C",
  },
  {
    question: "Question 178 : Lệnh NSLookup dùng để :",
    answers: [
      "A. Kiểm tra quá trình cấp phát địa chỉ IP động cho các máy",
      "B. Kiểm tra địa chỉ IP của máy",
      "C. Kiểm tra quá trình kết nối giữa các máy có thông nhau không",
      "D. Kiểm tra quá trình phân giải tên máy thành địa chỉ IP tương ứng",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 179 : Khi tạo tài khoản mới ta có sự lựa chọn cho các chính sách password User Cannot change password thì sẽ làm gì ?",
    answers: [
      "A. Lần đăng nhập tiếp theo sẽ phải đổi Password",
      "B. Tài khoản bị khóa",
      "C. Password không bao giờ hết hạn",
      "D. Tài khoản đó không được thay đổi password",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 180 : Kích thước Volume tối đa được hỗ trợ bao nhiêu GB của định dạng đĩa NTFS ?",
    answers: ["A. 64GB", "B. 16GB", "C. 32GB", "D. 1024GB"],
    correctAnswer: "D",
  },
  {
    question:
      "Question 181 : Trên miền tdmu.edu.vn có địa chỉ 192.168.12.6 chia sẻ máy in với tên HP1200 thông qua mạng nội bộ của cơ quan. Hùng muốn sử dụng máy in chia sẻ trên mạng, Hùng phải cấu hình máy in của mình như thế nào ?",
    answers: [
      "A. http://192.168.12.6/printers/HP1200",
      "B. http://192.168.12.6/HP1200",
      "C. http://tdmu.edu.vn/printer/HP1200",
      "D. http://tdmu.edu.vn/printers/HP1200",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 182 : Khi tạo tài khoản mới ta có sự lựa chọn cho các chính sách Password Account is disible thì sẽ làm gì ?",
    answers: [
      "A. Lần đăng nhập tiếp theo sẽ phải đổi Password",
      "B. Tài khoản bị khóa",
      "C. Password không bao giờ hết hạn",
      "D. Tài khoản đó không được thay đổi Password",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 183 : Trong trường hợp nếu như ta có dữ liệu là 5GB nhưng ta có 3 ổ đĩa dung lượng trống là ổ 1 là 3GB, ổ 2 là 1GB, ổ 3 là 2GB thì ta dùng loại cấu hình đĩa nào ?",
    answers: [
      "A. Volume Simple",
      "B. Volume Mirrored (Raid 1)",
      "C. Volume Spanned",
      "D. Volume Striped (Raid 0)",
    ],
    correctAnswer: "C",
  },
  {
    question: "Question 184 : Password nào là password phức tạp ?",
    answers: [
      "A. #@&amp;**&amp;hsasaslajlk1",
      "B. Aa123456@",
      "C. A12345678900987654321",
      "D. FHUDJJSJIfajfasfdskafsda",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 185 : Khi thiết lập các chính sách hệ thống ở mục Domain Controller Security Policy thì các chính sách này sẽ có :",
    answers: [
      "A. Phạm vi tác động lên các máy Client trong miền",
      "B. Phạm vi tác động lên các máy Domain Controller",
      "C. Phạm vi tác động lên cả Site.",
      "D. Phạm vi tác động lên toàn miền.",
    ],
    correctAnswer: "B",
  },
  {
    question: "Question 186 : Nhóm Everyone thuộc vào loại nhóm nào sau đây ?",
    answers: [
      "A. Nhóm Đồng nhất đặc biệt (Special Identity Group)",
      "B. Nhóm Cục bộ (Local Group)",
      "C. Nhóm Hệ thống dựng sẵn (Built-In System Group)",
      "D. Nhóm Cục bộ dựng sẵn (Built-In Local Group)",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 187 : Trong môi trường Domain, dịch vụ nào quản lý thông tin người dùng ?",
    answers: ["A. DHCP", "B. Active Directory", "C. MAIL", "D. DNS"],
    correctAnswer: "B",
  },
  {
    question:
      "Question 188 : Trong môi trường Workgroup, thông tin tài khoản được lưu trong tập tin nào ?",
    answers: ["A. SAM", "B. DOC", "C. URL", "D. SAN"],
    correctAnswer: "A",
  },
  {
    question: "Question 189 : Những chức năng nào không phải là của Raid 0 ?",
    answers: [
      "A. Dữ liệu được lưu trữ tuần tự",
      "B. Hiệu suất hoạt động",
      "C. Ít nhất phải 3 đĩa Dynamic",
      "D. Tăng dung lượng",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 190 : Trong quá trình cài đặt máy tính, Printer Port mà ta chọn là port nào ?",
    answers: ["A. LPT1", "B. PLT1", "C. PPT1", "D. LLt1"],
    correctAnswer: "A",
  },
  {
    question:
      "Question 191 : Trên miền (domain), bạn cấu hình Password Policy và đặt thông số Minimum Password Age là 1 ngày . Bạn hãy cho biết phát biểu nào dưới đây là đúng với một người sử dụng thông thường trong miền (domain) này?",
    answers: [
      "A. Người sử dụng này phải đợi 1 ngày sau mới đổi được mật khẩu",
      "B. Mật khẩu của người sử dụng này có thể được thay đổi ngay tức khắc bởi một người sử dụng khác",
      "C. Sau 1 ngày người sử dụng này sẽ nhận được thông báo “Mật khẩu của bạn hết hạn”",
      "D. Người sử dụng này có thể thay đổi mật khẩu ngay tức khắc",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 192 : Trên máy  tính PC0 có một thư mục TEMP nằm trên ổ đĩa C được chia sẻ ẨN. Bạn sẽ dùng đường dẫn nào sau đây để truy cập vào được thư mục này từ một máy khác trong mạng ?",
    answers: [
      "A. C:\\TEMP$",
      "B. \\\\ PC01\\TEMP$",
      "C. \\\\ PC01\\TEMP@",
      "D. \\\\ PC01\\TEMP#",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 193 : Trong quá trình cấu hình DNS Server chính, trong màn hình Zone Type, bạn chọn :",
    answers: [
      "A. Primary zone",
      "B. Secondary zone",
      "C. Main zone",
      "D. Stub zone",
    ],
    correctAnswer: "A",
  },
  {
    question: "Question 194 : Username nào là không đúng ?",
    answers: ["A. bao=bao", "B. 123456", "C. anh", "D. Flash_a"],
    correctAnswer: "A",
  },
  {
    question:
      "Question 195 : Tiện ích nào được dùng để tạo user accounts được lưu trữ trên Windows Server 2008 Domain controllers ?",
    answers: [
      "A. Active Directory Users and Groups",
      "B. Domain Users and Groups",
      "C. Active Directory Users and Computers",
      "D. Domain Users and Computers",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 196 : Phát biểu nào sau đây đúng cho Read-Only Domain Controller (RODC):",
    answers: [
      "A. RODC là một Domain Controller với cơ sở dữ liệu Active Directory trong đó có chứa thông tin về mật khẩu của các user",
      "B. RODC không cho phép thực hiện bất kỳ sự thay đổi nào ngoại trừ tài khoản máy tính và tài khoản người dùng",
      "C. RODC là một Domain Controller với cơ sở dữ liệu Active Directory cho phép các user có thể lưu thông tin lên nó",
      "D. RODC là một Domain Controller với cơ sở dữ liệu Active Directory ở dạng read-only",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 197 : Quyền Full Control trong cấu hình share permission thì ý nào là đúng ?",
    answers: [
      "A. Cho phép người dùng thay đổi dữ liệu trên tập tin",
      "B. Xóa tập tin trong thư mục chia sẻ",
      "C. Cho phép người dùng xem và thi hành các tập tin trong thư mục chia sẻ",
      "D. Toàn quyền trên thư mục chia sẻ",
    ],
    correctAnswer: "D",
  },
  {
    question: "Question 198 : Lệnh DCPROMO dùng để làm gì ?",
    answers: [
      "A. Nâng cấp Windows 7 Professional thành Domain controller",
      "B. Liệt kê danh sách các Domain controller",
      "C. Nâng cấp Windows Server 2008 thành Domain controller",
      "D. Nâng cấp Windows 2003 thành Server thành Windows Server 2008",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 199 : Trên máy tính sử dụng Windows 2008 Enterprise ở trong mô hình WorkGroup, ai có quyền chia sẻ thư mục trên máy tính này ?",
    answers: [
      "A. Thành viên của nhóm Enterprise Admins và Remote Desktop Users",
      "B. Thành viên của nhóm Administrators và Power Users",
      "C. Thành viên của nhóm Administrators và Domain Guests",
      "D. Thành viên của nhóm Administrators và Domain Users",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 200 : Trong môi trường Domain, thông tin tài khoản được lưu trong tập tin nào ?",
    answers: ["A. AD", "B. log", "C. NTDS.DIT", "D. syslog.msc"],
    correctAnswer: "C",
  },
  {
    question:
      "Question 201 : Trong các giao thức sau, giao thức nào được sử dụng trong dịch vụ mail?",
    answers: [
      "A. TCP/IP và FTP",
      "B. POP3 và SMTP",
      "C. NetBEUI và TCP/IP",
      "D. FTP và HTTP",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 202 : Triển khai chính sách nhóm trên miền, chính sách Software Setting các cấu hình trên chúng liên quan đến vấn đề gì ?",
    answers: [
      "A. Các cấu hình liên quan đến các phần mềm được cài đặt",
      "B. Các chính sách hệ thống",
      "C. Các thiết lập cho các thành phần của Windows",
      "D. Các thiết lập liên quan tròng quá trình sử dụng Windows",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 203 : Volume Spanner dùng tối đa bao nhiêu ổ đĩa vật lý ?",
    answers: [
      "A. 64 ổ đĩa vật lý",
      "B. 50 ổ đĩa vật lý",
      "C. 32 ở đĩa vật lý",
      "D. 12 ổ đĩa vật lý",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 204 : Lan đang lựa chọn địa chỉ IP để gán cho máy chủ sử dụng Microsoft Windows Server 2008 (Web Edition). Máy xách tay của cô ta sử dụng địa chỉ IP 10.52.1.37 với mặt nạ mạng 255.255.255.0, máy tính này đang được kết nối vào cùng một switch với máy chủ. Địa chỉ IP và mặt nạ mạng nào dưới đây cô ta có thể sử dụng để gán cho máy chủ để máy xách tay của cô ta có thể kết nối vào máy chủ mà chỉ sử dụng Switch và giao thức TCP/IP ?",
    answers: [
      "A. 10.52.1.130 255.255.255.192",
      "B. 10.1.52.31 255.255.255.0",
      "C. 10.52.1.37 255.255.255.0",
      "D. 10.52.1.130 255.255.255.0",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 205 : Quyền mặc định của nhóm Printer Operation là gì ?",
    answers: [
      "A. Quản lý tài liệu in",
      "B. Được phép in",
      "C. Quản lý máy in",
      "D. Cả 3 đáp án còn lại đều đúng",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 206 : Volume Simple là dùng trên mấy ổ đĩa để phân chia ?",
    answers: [
      "A. 4 ổ đĩa",
      "B. 2 ổ đĩa",
      "C. Một ổ đĩa duy nhất",
      "D. 3 ổ đĩa",
    ],
    correctAnswer: "C",
  },
  {
    question: "Question 207 : Thiết lập hạn ngạch chỉ được áp dụng trên ?",
    answers: ["A. FAT", "B. FAT32", "C. NTFS", "D. FAT36"],
    correctAnswer: "C",
  },
  {
    question:
      "Question 208 : Những công cụ nào dưới đây cho phép bạn tạo ra các tài khoản người dùng, máy tính và nhóm dựa trên dữ liệu bạn nhập vào hoặc từ một file ?",
    answers: [
      "A. DSQUERY",
      "B. Active Directory Users and Computers",
      "C. Active Directory Users and Trusts",
      "D. DSMOD",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 209 : Thông tin người dùng được quản lý ở đâu trên Domain ?",
    answers: ["A. Active Directory", "B. NTFS", "C. Mail", "D. Web"],
    correctAnswer: "A",
  },
  {
    question: "Question 210 : Quyền mặc định của nhóm Everyone là gì ?",
    answers: [
      "A. Được phép in",
      "B. Quản lý máy in",
      "C. Cả 3 phương án đều đúng",
      "D. Quản lý tài liệu in",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 211 : Nội dung nào sau đây không mô tả đúng về hệ thống file NTFS ?",
    answers: [
      "A. Hỗ trợ hạn ngạch đĩa",
      "B. Hỗ trợ mã hóa tập tin",
      "C. Hỗ trợ nén đĩa",
      "D. Hỗ trợ truy cập từ Windows 98",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 212 : Về cách thức hoạt động, DNS Server lưu trữ một cơ sở dữ liệu bao gồm các bản ghi DNS và dịch vụ lắng nghe các yêu cầu. Khi máy trạm gửi yêu cầu phân giải đến, DNS tiến hành:",
    answers: [
      "A. Tra cứu trong cơ sở dữ liệu và gửi kết quả tương ứng về cho máy trạm",
      "B. Nhờ hệ thống DNS phân giải hộ xong lấy kết quả trả về cho máy trạm",
      "C. Tự mình phân giải tên thành địa chỉ IP và gửi kết quả tương ứng về máy trạm",
      "D. Tra cứu trong cơ sở dữ liệu cục bộ và nếu có sẽ gửi kết quả tương ứng về cho máy trạm, nếu không sẽ nhờ hệ thống DNS phân giải hộ xong lấy kết quả trả về cho máy trạm",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 213 : Với các file đã tồn tại trong ổ đĩa hoặc thư mục trước khi file screen được tạo ra :",
    answers: [
      "A. Người sử dụng được quyền truy cập vào các file đó nếu sử dụng thêm chức năng Allow Access File",
      "B. Người sử dụng hoàn toàn có thể truy cập được cho dù các file đó thuộc vào danh sách các loại file bị cấm",
      "C. Các file thuộc danh sách bị cấm sẽ tự động xóa bỏ",
      "D. Người sử dụng không thể truy cập được vì các file đó thuộc vào danh sách các loại file bị cấm",
    ],
    correctAnswer: "B",
  },
  {
    question:
      "Question 214 : Trong server 2008 mặc định nhóm tài khoản nào không được đăng nhập trong server 2008 ?",
    answers: [
      "A. Nhóm Backup Operators",
      "B. Nhóm Server Operators",
      "C. Nhóm users",
      "D. Nhóm administrators",
    ],
    correctAnswer: "C",
  },
  {
    question:
      "Question 215 : Khi tiến hành cài đặt dịch vụ Active Directory, nếu muốn tạo mới Domain Controller để quản lý 1 domain thì chọn mục nào ?",
    answers: [
      "A. Domain in a new forest",
      "B. Cả 3 đáp án còn lại đều đúng",
      "C. Domain tree in an existing forest",
      "D. Child domain in an existing domain tree",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 216 : Trong môi trường MS Windows các quyền có thể thiết lập cho User truy xuất thông qua mạng là ?",
    answers: [
      "A. Read, Change, Full Control",
      "B. Read, Change",
      "C. Change, Full Control",
      "D. Read, Full Control",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 217 : Trên máy tính cục bộ (local), khi tạo mới tài khoản người dùng thì mặc định người dùng này thuộc nhóm nào ?",
    answers: [
      "A. Users",
      "B. Administrators",
      "C. Guests",
      "D. Performance Log Users",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 218 : Những quyền nào sau đây không phải là quyền share ?",
    answers: ["A. Change", "B. Full Control", "C. Write", "D. Read"],
    correctAnswer: "C",
  },
  {
    question: "Question 219 : Những bước nào sau đây có thể tạo ra User ?",
    answers: [
      "A. Start / program / admin tool / Domain Security policy / Click Tên máy chọn biểu tượng tạo User",
      "B. Start / program / admin tool / Active Directory users and Computers / Click Tên máy chọn biểu tượng tạo User",
      "C. Start / program / admin tool / Domain  Controller Security policy / Click Tên máy chọn biểu tượng tạo User",
      "D. Start / program / admin tool / Active Directory Domain and Trust  / Click Tên máy chọn biểu tượng tạo User",
    ],
    correctAnswer: "B",
  },
  {
    question: "Question 220 : Tính năng nào là tính năng của Volume (Raid 1) ?",
    answers: [
      "A. Hiệu suất hoạt động",
      "B. Tăng dung lượng",
      "C. An toàn cho dữ liệu",
      "D. Dữ liệu được lưu trữ tuần tự",
    ],
    correctAnswer: "C",
  },
  {
    question: "Question 221 : Trong Object chứa những thuộc tính cơ bản nào ?",
    answers: [
      "A. User, Computer, Printer",
      "B. Computer, User",
      "C. User, Printer",
      "D. Cả 3 đáp án còn lại đều sai",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Question 222 : Thay vì nhớ địa chỉ IP mà ta chỉ cần biết tên miền thì ở đây chúng ta sử dụng dịch vụ mạng nào ?",
    answers: ["A. FTP", "B. DHCP", "C. DNS", "D. MAIL"],
    correctAnswer: "C",
  },
  {
    question:
      "Question 223 : Khi tạo tài khoản mới ta có sự lựa chọn cho các chính sách Password never express thì sẽ làm gì ?",
    answers: [
      "A. Tài khoản đó không được thay đổi password",
      "B. Lần đăng nhập tiếp theo sẽ phải đổi Password",
      "C. Tài khoản bị khóa",
      "D. Password không bao giờ hết hạn",
    ],
    correctAnswer: "D",
  },
  {
    question:
      "Question 224 : Trong windows 7 khi chia sẻ thư mục mặc định hệ điều hành cho phép bao nhiêu người dùng truy nhập đồng thời vào thư mục chia sẻ đó ?",
    answers: ["A. 20", "B. Không giới thiệu", "C. 30", "D. 10"],
    correctAnswer: "B",
  },
];

// Function to render questions
function renderQuiz() {
  const quizContainer = document.getElementById("quiz");
  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.setAttribute("data-question-index", index);
    questionDiv.setAttribute("id", `question-${index + 1}`); // Set an id for each question for easy reference
    questionDiv.innerHTML = `<h3>${q.question}</h3>`;

    q.answers.forEach((answer) => {
      const answerDiv = document.createElement("div");
      answerDiv.classList.add("answer");
      answerDiv.textContent = answer;

      answerDiv.onclick = () =>
        checkAnswer(questionDiv, answerDiv, answer, q.correctAnswer);
      questionDiv.appendChild(answerDiv);
    });

    quizContainer.appendChild(questionDiv);
  });
}

// Function to check answers
function checkAnswer(
  questionDiv,
  selectedAnswerDiv,
  selectedAnswer,
  correctAnswer
) {
  // Clear styles for all answers in the same question
  const answers = questionDiv.querySelectorAll(".answer");
  answers.forEach((answer) => {
    answer.classList.remove("correct", "wrong");
  });

  // Apply style for the selected answer
  if (selectedAnswer.startsWith(correctAnswer)) {
    selectedAnswerDiv.classList.add("correct");
  } else {
    selectedAnswerDiv.classList.add("wrong");
  }
}

// Scroll to the question number
function scrollToQuestion() {
  const questionNumber = document.getElementById("questionSearch").value;
  const questionDiv = document.getElementById(`question-${questionNumber}`);

  if (questionDiv) {
    questionDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    alert("Question number not found");
  }
}

// Add event listener to the button
document
  .getElementById("scrollButton")
  .addEventListener("click", scrollToQuestion);

// Render quiz after the page is loaded
document.addEventListener("DOMContentLoaded", renderQuiz);