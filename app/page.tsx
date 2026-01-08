import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`My name is Nav(Navadeep), I am a civil engineer with over five years of experience in the demolition industry,
        based in Australia. My professional background includes delivering complex demolition
        projects with a strong focus on safety, planning, and on-site execution.
        
        I hold a Master’s degree in Construction Management from Deakin University, which has
        strengthened my skills in project management, contract administration, and stakeholder
        coordination across infrastructure and commercial projects.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
