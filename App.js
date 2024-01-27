import { getImageUrl } from './utils.js';

function Profile ({
  imageId,
  name,
  profession,
  formation,
  interesting,
  imageSize = 70
}) {
  return (
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl('imageId')}
          alt={name}
          width={imageSize}
          height={imageSize}
        />
        <ul>
            <li><b>Profession:</b> {profession}</li>
            <li>
            <b>Formation: {formation.length} </b>
            ({formation.join(', ')})
            </li>
          <li>
            <b>Interesting: </b>
            {interesting}
          </li>
        </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Self Introduction</h1>
      <Profile
        imageId="c4hun"
        name="Sacha, c4hun"
        profession="Cashier"
        interesting="Angular, AWS Cloud and Linux OS"
        formation={[
          '2023-2024 Studi: GRADUATE DEVELOPPEUR WEB FULL STACK',
          'EFC formation: Assistant Accountant',
        ]}
      />
    </div>
  );
}
