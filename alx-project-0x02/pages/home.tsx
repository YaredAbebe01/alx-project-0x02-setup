import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Home Page</h1>

      <Card 
        title="Card One" 
        content="This is the first card component." 
      />

      <Card 
        title="Card Two" 
        content="This is the second card with different content." 
      />

      <Card 
        title="Card Three" 
        content="This shows dynamic reusable components." 
      />
    </div>
  );
}
