// HOME 버튼 클릭 시 메인 화면으로 이동하는 함수
function goToHome() {
    // 메인 화면으로 이동하는 코드 작성
    window.location.href = "index.html"; // 메인 페이지 파일명(index.html)에 맞게 수정
  }
  
  // 팀원소개 버튼 클릭 시 팀원소개 페이지로 이동하는 함수
  function goToTeam() {
    // 팀원소개 페이지로 이동하는 코드 작성
    window.location.href = "team.html"; // 팀원소개 페이지 파일명(team.html)에 맞게 수정
  }
  
  // HOME 버튼과 팀원소개 버튼에 클릭 이벤트 핸들러 등록
  document.getElementById("homeButton").addEventListener("click", goToHome);
  document.getElementById("teamButton").addEventListener("click", goToTeam);