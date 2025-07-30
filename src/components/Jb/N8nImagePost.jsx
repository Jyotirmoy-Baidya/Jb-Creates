import React, { useState } from 'react';

const N8nImagePost = () => {
    const [ssImage, setSsImage] = useState(null);
    const [inspirationImage, setInspirationImage] = useState(null);
    const [urls, setUrls] = useState({ ss_image: '', inspiration_image: '' });
    const [colourTheme, setColourTheme] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [platform, setPlatform] = useState('');
    const [loading, setLoading] = useState(false);

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    const uploadImageToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);

        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: formData,
        });

        const data = await res.json();
        return data.secure_url;
    };

    const handleUpload = async () => {
        if (!ssImage || !inspirationImage || !colourTheme || !title || !description || !platform) {
            alert("Please fill all fields and upload both images.");
            return;
        }

        setLoading(true);

        try {
            const [url1, url2] = await Promise.all([
                uploadImageToCloudinary(ssImage),
                uploadImageToCloudinary(inspirationImage),
            ]);
            setUrls({ ss_image: url1, inspiration_image: url2 });

            const response = await fetch('https://n8n.finnofarms.in/webhook-test/b7658a75-7e68-490b-ab99-b02acfe48f3a', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    colour_theme: colourTheme,
                    title,
                    description,
                    platform,
                    ss_image: url1,
                    inspiration_image: url2,
                }),
            });

            const result = await response.json();
            console.log('Webhook Response:', result);

        } catch (err) {
            console.error("Upload or webhook failed:", err);
        } finally {
            // After webhook response
            setColourTheme('');
            setTitle('');
            setDescription('');
            setPlatform('');
            setSsImage(null);
            setInspirationImage(null);
            setUrls({ ss_image: '', inspiration_image: '' });
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white shadow-xl rounded-2xl space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">📢 Create Your Post</h2>

            {/* Colour Theme */}
            <div>
                <label className="block font-medium text-gray-700 mb-2">🎨 Colour Theme</label>
                <input
                    type="text"
                    placeholder="e.g. blue"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={colourTheme}
                    onChange={(e) => setColourTheme(e.target.value)}
                />
            </div>

            {/* SS Image */}
            <div>
                <label className="block font-medium text-gray-700 mb-2">🖼️ SS Image (JPG/JPEG)</label>
                <input
                    type="file"
                    accept=".jpg,.jpeg,image/jpeg"
                    onChange={(e) => setSsImage(e.target.files[0])}
                    className="file-input file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
            </div>

            {/* Inspiration Image */}
            <div>
                <label className="block font-medium text-gray-700 mb-2">🌈 Inspiration Image (JPG/JPEG)</label>
                <input
                    type="file"
                    accept=".jpg,.jpeg,image/jpeg"
                    onChange={(e) => setInspirationImage(e.target.files[0])}
                    className="file-input file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                />
            </div>

            {/* Title */}
            <div>
                <label className="block font-medium text-gray-700 mb-2">📌 Title</label>
                <input
                    type="text"
                    placeholder="Give your post a catchy title"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            {/* Description */}
            <div>
                <label className="block font-medium text-gray-700 mb-2">📝 Description</label>
                <textarea
                    rows={4}
                    placeholder="Describe your thought process or idea..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            {/* Platform */}
            <div>
                <label className="block font-medium text-gray-700 mb-2">📍 Where to post:</label>
                <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                >
                    <option value="">Select a platform</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="x">X (Twitter)</option>
                    <option value="reddit">Reddit</option>
                </select>
            </div>

            {/* Upload Button */}
            <button
                onClick={handleUpload}
                disabled={loading}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition"
            >
                {loading ? "Uploading..." : "📤 Upload & Prepare Post"}
            </button>

            {/* Preview */}
            {urls.ss_image && urls.inspiration_image && (
                <div className="mt-8 border-t pt-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">👀 Preview</h3>
                    <p><strong>Colour Theme:</strong> {colourTheme}</p>
                    <p><strong>Title:</strong> {title}</p>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Platform:</strong> {platform.charAt(0).toUpperCase() + platform.slice(1)}</p>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <p className="font-medium mb-2">🖼️ SS Image:</p>
                            <img src={urls.ss_image} alt="SS" className="rounded-xl shadow-md" />
                        </div>
                        <div>
                            <p className="font-medium mb-2">🌈 Inspiration Image:</p>
                            <img src={urls.inspiration_image} alt="Inspiration" className="rounded-xl shadow-md" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default N8nImagePost;
