function Header({ ...props }) {
  return (
    <div w3-include-header="header.html">
      <header data-role="header">
        <h1>H</h1>
      </header>
    </div>
  );
}

export default Header; // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
