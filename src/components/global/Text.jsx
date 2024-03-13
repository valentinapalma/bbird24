const Text = ({ heading, lead, paragraph, paragraph2 }) => {
  return (
    <>
      {heading ? <h2 className="mb-3">{heading}</h2> : null}
      {lead ? <p className="lead">{lead}</p> : null}
      {paragraph ? <p>{paragraph}</p> : null}
      {paragraph2 ? <p>{paragraph2}</p> : null}
    </>
  );
};

export default Text;
