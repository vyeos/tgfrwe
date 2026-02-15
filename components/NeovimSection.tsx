import "@/app/styles/neovim.css";

type NeovimHighlight = {
  title: string;
  description: string;
};

type NeovimSectionProps = {
  neovimHighlight: NeovimHighlight;
};

export default function NeovimSection({ neovimHighlight }: NeovimSectionProps) {
  return (
    <section className="neovim-section">
      <div className="neovim-content">
        <h2 className="neovim-title">
          <span>&gt;</span> {neovimHighlight.title}
        </h2>

        <p className="neovim-desc">{neovimHighlight.description}</p>
      </div>

      <div className="neovim-visual">
        <div className="terminal-mock">
          <div>
            <span className="comment">-- init.lua</span>
          </div>

          <div>
            <span className="keyword">require</span>(
            <span className="string">"lazy"</span>).setup(plugins)
          </div>

          <div>
            <span className="keyword">vim.opt</span>.relativenumber ={" "}
            <span className="keyword">true</span>
          </div>

          <div>
            <span className="keyword">vim.opt</span>.expandtab ={" "}
            <span className="keyword">true</span>
          </div>

          <div>
            <span className="keyword">vim.g</span>.mapleader ={" "}
            <span className="string">" "</span>
          </div>

          <div>
            <span className="comment">-- LSP configured</span>
          </div>

          <div>
            <span className="cursor"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
