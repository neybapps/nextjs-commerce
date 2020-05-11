import Header from 'components/Header/Header.component';

function HomePage(props) {
  // We can destructure here or inside the map.
  // We should probably destructure in the function declaration.
  // TODO Replace key with uuid()
  return (
    <>
      <Header />
      <div>
        {props.posts.map(({ id, name, price, images }) => (
          <div key={id}>
            ID: {id} <br /> Name: {name} <br /> Price: ${price} <br /> Image:{' '}
            <img src={images[0].src} />
            <br />
            <button className="btn-blue">Button</button>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

// Prerender data for quicker loading.
// Should we use getServerSideProps?

export async function getStaticProps() {
  const posts = await fetch(`${process.env.NEXTJS_URL}/api/getWooProducts`)
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return {
    props: {
      posts,
    },
  };
}

export default HomePage;
