export default function Text({ heading, lead, paragraph }) {
    return (
        <>
            {heading ? <h2 class="mb-3">{heading}</h2> : null}
            {lead ? <p class="lead">{lead}</p> : null}
            {paragraph ? <p>{paragraph}</p> : null}
        </>
    );
}