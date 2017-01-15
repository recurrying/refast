import EmptyData from 'uxcore-empty-data';
// 除了`class`的声明方式，你还可以函数式声明组件
export default ({ data = [] }) => {
  let jsx = null;
  if (data.length) {
    jsx = data.map((l, k) => (<p key={k}>{`${l.workNo}-${l.name}(${l.nickName})`}</p>));
  } else {
    jsx = (<EmptyData type="large" />);
  }

  return (
    <div className="mod-search-data">
      <div>
        <p><b>匹配的员工:</b></p>
        <div>{jsx}</div>
      </div>
    </div>
  );
};
