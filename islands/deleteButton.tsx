interface DeleteButtonProps {
    postId: string;
  }
  
  export default function DeleteButton({ postId }: DeleteButtonProps) {
    const handleDelete = async () => {
      await fetch(`https://back-p5-y0e1.onrender.com/api/posts/${postId}`, {
        method: "DELETE",
      });
      globalThis.location.href = "/";
    };
  
    return (
      <button
        type="button"
        className="delete-button"
        onClick={handleDelete}
        aria-label="Eliminar post"
      >
        🗑️ Eliminar
      </button>
    );
  }