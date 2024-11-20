// import React, { useState, useRef } from 'react';
// import { marked } from 'marked';
// import { uploadImage } from '../utils/imageUpload';
// import '../styling/markdownEditor.scss';

// const MarkdownEditor = () => {
//     const [markdown, setMarkdown] = useState('');
//     const [isUploading, setIsUploading] = useState(false);
//     const textAreaRef = useRef(null);
//     const [showListMenu, setShowListMenu] = useState(false);

//     // Configure marked to handle lists and indentation correctly
//     marked.setOptions({
//         gfm: true,
//         breaks: true,
//         pedantic: false,
//         smartLists: true,
//         smartypants: true,
//         headerIds: false
//     });

//     const handleMarkdownChange = (e) => {
//         const value = e.target.value;
//         setMarkdown(value);
//         handleSmartFormatting(e);
//     };

//     const handleKeyDown = (e) => {
//         const textarea = textAreaRef.current;
//         const currentValue = textarea.value;
//         const cursorPosition = textarea.selectionStart;
//         const lines = currentValue.split('\n');
//         const currentLineIndex = currentValue.substr(0, cursorPosition).split('\n').length - 1;
//         const currentLine = lines[currentLineIndex];

//         // Handle Tab key for nested lists
//         if (e.key === 'Tab') {
//             e.preventDefault();
            
//             // Updated regex patterns to better handle list items at any indentation level
//             const unorderedMatch = currentLine.match(/^(\s*?)(?:[-*])\s+(.*)/);
//             const orderedMatch = currentLine.match(/^(\s*?)(\d+)\.\s+(.*)/);
//             const checklistMatch = currentLine.match(/^(\s*?)(?:[-*])\s+\[([ x])\]\s+(.*)/);
            
//             if (unorderedMatch || orderedMatch || checklistMatch) {
//                 if (!e.shiftKey) {
//                     // Indent - Add 2 spaces and adjust list marker
//                     let newLine;
//                     const indent = '  ';
                    
//                     if (orderedMatch) {
//                         // Reset numbering to 1 for nested ordered list
//                         newLine = `${indent}${orderedMatch[1]}1. ${orderedMatch[3]}`;
                        
//                         // Update subsequent ordered list items at the same level
//                         let counter = 2;
//                         for (let i = currentLineIndex + 1; i < lines.length; i++) {
//                             const nextLineMatch = lines[i].match(/^(\s*?)(\d+)\.\s+(.*)/);
//                             if (nextLineMatch && nextLineMatch[1].length === orderedMatch[1].length) {
//                                 lines[i] = `${indent}${nextLineMatch[1]}${counter}. ${nextLineMatch[3]}`;
//                                 counter++;
//                             } else if (!nextLineMatch || nextLineMatch[1].length < orderedMatch[1].length) {
//                                 break;
//                             }
//                         }
//                     } else if (unorderedMatch) {
//                         newLine = `${indent}${unorderedMatch[1]}- ${unorderedMatch[2]}`;
//                     } else if (checklistMatch) {
//                         newLine = `${indent}${checklistMatch[1]}- [${checklistMatch[2]}] ${checklistMatch[3]}`;
//                     }
//                     lines[currentLineIndex] = newLine;
//                 } else {
//                     // Outdent - Remove 2 spaces if they exist
//                     if (currentLine.match(/^\s{2}/)) {
//                         let newLine;
//                         if (orderedMatch) {
//                             // Find the appropriate number for this level
//                             let nextNumber = 1;
//                             for (let i = currentLineIndex - 1; i >= 0; i--) {
//                                 const prevLineMatch = lines[i].match(/^(\s*?)(\d+)\.\s+(.*)/);
//                                 if (prevLineMatch && prevLineMatch[1].length === orderedMatch[1].length - 2) {
//                                     nextNumber = parseInt(prevLineMatch[2]) + 1;
//                                     break;
//                                 } else if (prevLineMatch && prevLineMatch[1].length < orderedMatch[1].length - 2) {
//                                     break;
//                                 }
//                             }
//                             newLine = `${orderedMatch[1].slice(2)}${nextNumber}. ${orderedMatch[3]}`;
                            
//                             // Update subsequent ordered list items at the same level
//                             let counter = nextNumber + 1;
//                             for (let i = currentLineIndex + 1; i < lines.length; i++) {
//                                 const nextLineMatch = lines[i].match(/^(\s*?)(\d+)\.\s+(.*)/);
//                                 if (nextLineMatch && nextLineMatch[1].length === orderedMatch[1].length) {
//                                     lines[i] = `${nextLineMatch[1].slice(2)}${counter}. ${nextLineMatch[3]}`;
//                                     counter++;
//                                 } else if (!nextLineMatch || nextLineMatch[1].length < orderedMatch[1].length) {
//                                     break;
//                                 }
//                             }
//                         } else if (unorderedMatch) {
//                             newLine = `${unorderedMatch[1].slice(2)}- ${unorderedMatch[2]}`;
//                         } else if (checklistMatch) {
//                             newLine = `${checklistMatch[1].slice(2)}- [${checklistMatch[2]}] ${checklistMatch[3]}`;
//                         }
//                         lines[currentLineIndex] = newLine;
//                     }
//                 }
                
//                 const newValue = lines.join('\n');
//                 setMarkdown(newValue);
                
//                 // Maintain cursor position
//                 setTimeout(() => {
//                     const newLineStart = newValue.split('\n').slice(0, currentLineIndex).join('\n').length;
//                     const newLine = lines[currentLineIndex];
//                     const listMarkerMatch = newLine.match(/^(\s*?)(?:[-*]|\d+\.)\s+(?:\[[ x]\]\s+)?/);
//                     const markerLength = listMarkerMatch ? listMarkerMatch[0].length : 0;
//                     const newPosition = newLineStart + (newLineStart > 0 ? 1 : 0) + markerLength;
//                     textarea.selectionStart = textarea.selectionEnd = newPosition;
//                 }, 0);
//             }
//         }
        
//         // Handle Enter key for list continuation
//         if (e.key === 'Enter') {
//             e.preventDefault();
            
//             // Check if the current line is a list item
//             const unorderedMatch = currentLine.match(/^(\s*)-\s(.*)/);
//             const orderedMatch = currentLine.match(/^(\s*)(\d+)\.\s(.*)/);
//             const checklistMatch = currentLine.match(/^(\s*)-\s\[([ x])\]\s(.*)/);
            
//             if (unorderedMatch || orderedMatch || checklistMatch) {
//                 const content = unorderedMatch?.[2] || orderedMatch?.[3] || checklistMatch?.[3] || '';
//                 const indent = (unorderedMatch?.[1] || orderedMatch?.[1] || checklistMatch?.[1] || '');
                
//                 if (content.trim() === '') {
//                     // If the current list item is empty, remove it and its indentation
//                     lines[currentLineIndex] = '';
//                     if (currentLineIndex > 0 && lines[currentLineIndex - 1].trim() === '') {
//                         lines.splice(currentLineIndex, 1);
//                     }
//                 } else {
//                     // Create a new list item with the same indentation
//                     let newItem;
//                     if (unorderedMatch) {
//                         newItem = `${indent}- `;
//                     } else if (orderedMatch) {
//                         // Find the next number in the current indentation level
//                         let nextNumber = parseInt(orderedMatch[2]) + 1;
//                         let i = currentLineIndex - 1;
//                         let foundSameLevel = false;
                        
//                         // Look backwards to find the indentation level
//                         while (i >= 0) {
//                             const prevLine = lines[i];
//                             const prevMatch = prevLine.match(/^(\s*)(\d+)\.\s(.*)/);
//                             if (prevMatch && prevMatch[1] === indent) {
//                                 foundSameLevel = true;
//                                 nextNumber = parseInt(prevMatch[2]) + 1;
//                                 break;
//                             } else if (prevMatch && prevMatch[1].length < indent.length) {
//                                 // We've reached a parent level, stop looking
//                                 break;
//                             }
//                             i--;
//                         }
                        
//                         // If we're at a nested level and haven't found a previous number at this level,
//                         // start from 1
//                         if (indent.length > 0 && !foundSameLevel) {
//                             nextNumber = 1;
//                         }
                        
//                         newItem = `${indent}${nextNumber}. `;
//                     } else if (checklistMatch) {
//                         newItem = `${indent}- [ ] `;
//                     }
//                     lines.splice(currentLineIndex + 1, 0, newItem);
//                 }
                
//                 const newValue = lines.join('\n');
//                 setMarkdown(newValue);
                
//                 // Calculate the position after the list marker
//                 setTimeout(() => {
//                     const newLineStart = newValue.split('\n').slice(0, currentLineIndex + 2).join('\n').length;
//                     const newLine = lines[currentLineIndex + 1];
//                     const listMarkerMatch = newLine.match(/^(\s*)(-|\d+\.)\s(\[ \]\s)?/);
//                     const markerLength = listMarkerMatch ? listMarkerMatch[0].length : 0;
//                     textarea.selectionStart = textarea.selectionEnd = newLineStart + markerLength;
//                 }, 0);
//             } else {
//                 // Normal enter behavior
//                 const newValue = currentValue.slice(0, cursorPosition) + '\n' + currentValue.slice(cursorPosition);
//                 setMarkdown(newValue);
//                 setTimeout(() => {
//                     textarea.selectionStart = textarea.selectionEnd = cursorPosition + 1;
//                 }, 0);
//             }
//         }
        
//         // Rest of the code remains the same
//     };

//     const handleSmartFormatting = (e) => {
//         const textarea = textAreaRef.current;
//         const start = textarea.selectionStart;
//         const lines = markdown.split('\n');
//         const currentLineIndex = markdown.substr(0, start).split('\n').length - 1;
//         const currentLine = lines[currentLineIndex];

//         // Auto Headers
//         if (currentLine.startsWith('header ') || currentLine.startsWith('title ')) {
//             const text = currentLine.replace(/^(header|title)\s+/, '');
//             lines[currentLineIndex] = `# ${text}`;
//             const newMarkdown = lines.join('\n');
//             setMarkdown(newMarkdown);
//         }

//         // Auto Lists
//         if (currentLine === '-' || currentLine === '1.') {
//             lines[currentLineIndex] += ' ';
//             const newMarkdown = lines.join('\n');
//             setMarkdown(newMarkdown);
//         }

//         // Auto complete for links
//         if (currentLine.endsWith('[]()')) {
//             const cursorPos = textarea.selectionStart - 1;
//             textarea.selectionStart = cursorPos;
//             textarea.selectionEnd = cursorPos;
//         }
//     };

//     const insertMarkdown = (syntax) => {
//         const textarea = textAreaRef.current;
//         const start = textarea.selectionStart;
//         const end = textarea.selectionEnd;
//         const selectedText = markdown.substring(start, end);
//         let insertion = '';

//         switch(syntax) {
//             case 'bold':
//                 insertion = `**${selectedText || 'bold text'}**`;
//                 break;
//             case 'italic':
//                 insertion = `_${selectedText || 'italic text'}_`;
//                 break;
//             case 'link':
//                 insertion = `[${selectedText || 'link text'}](url)`;
//                 break;
//             case 'code':
//                 insertion = `\`${selectedText || 'code'}\``;
//                 break;
//             case 'unordered-list':
//                 if (selectedText) {
//                     // Convert selected text into list items
//                     insertion = selectedText.split('\n').map(line => `- ${line}`).join('\n');
//                 } else {
//                     insertion = `\n- List item`;
//                 }
//                 break;
//             case 'ordered-list':
//                 if (selectedText) {
//                     // Convert selected text into numbered list items
//                     insertion = selectedText.split('\n').map((line, index) => `${index + 1}. ${line}`).join('\n');
//                 } else {
//                     insertion = `\n1. List item`;
//                 }
//                 break;
//             case 'checklist':
//                 if (selectedText) {
//                     // Convert selected text into checklist items
//                     insertion = selectedText.split('\n').map(line => `- [ ] ${line}`).join('\n');
//                 } else {
//                     insertion = `\n- [ ] Task item`;
//                 }
//                 break;
//             default:
//                 break;
//         }

//         const newMarkdown = 
//             markdown.substring(0, start) +
//             insertion +
//             markdown.substring(end);

//         setMarkdown(newMarkdown);
        
//         // Set cursor position
//         setTimeout(() => {
//             const newCursorPos = start + insertion.length;
//             textarea.selectionStart = textarea.selectionEnd = newCursorPos;
//         }, 0);
//     };

//     const handleImageUpload = async (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             try {
//                 setIsUploading(true);
//                 // Upload to cloud storage
//                 const imageUrl = await uploadImage(file);
                
//                 // Insert markdown with the cloud URL
//                 const imageMarkdown = `![${file.name}](${imageUrl})`;
//                 insertMarkdown(imageMarkdown);
//             } catch (error) {
//                 console.error('Failed to upload image:', error);
//                 // You might want to show an error message to the user
//             } finally {
//                 setIsUploading(false);
//             }
//         }
//     };

//     const getMarkdownPreview = (text) => {
//         // Pre-process the markdown to handle indented lists correctly
//         const processedText = text.split('\n').map(line => {
//             // Handle indented ordered lists
//             const orderedMatch = line.match(/^(\s+)(\d+)\.\s(.*)/);
//             const unorderedMatch = line.match(/^(\s+)-\s(.*)/);
//             const checklistMatch = line.match(/^(\s+)-\s\[([ x])\]\s(.*)/);

//             if (orderedMatch) {
//                 const [, spaces, number, content] = orderedMatch;
//                 // Convert spaces to proper markdown list nesting (4 spaces = 1 level)
//                 const indentLevel = Math.floor(spaces.length / 2);
//                 return `${' '.repeat(indentLevel * 4)}1. ${content}`;
//             } else if (checklistMatch) {
//                 const [, spaces, checked, content] = checklistMatch;
//                 const indentLevel = Math.floor(spaces.length / 2);
//                 return `${' '.repeat(indentLevel * 4)}- [${checked}] ${content}`;
//             } else if (unorderedMatch) {
//                 const [, spaces, content] = unorderedMatch;
//                 const indentLevel = Math.floor(spaces.length / 2);
//                 return `${' '.repeat(indentLevel * 4)}- ${content}`;
//             }
//             return line;
//         }).join('\n');

//         return marked.parse(processedText);
//     };

//     return (
//         <div className="markdown-editor">
//             <div className="toolbar">
//                 <button onClick={() => insertMarkdown('**', '**')} title="Bold">
//                     <strong>B</strong>
//                 </button>
//                 <button onClick={() => insertMarkdown('*', '*')} title="Italic">
//                     <em>I</em>
//                 </button>
//                 <button onClick={() => insertMarkdown('[', '](url)')} title="Link">
//                     🔗
//                 </button>
//                 <button onClick={() => insertMarkdown('`', '`')} title="Code">
//                     {'</>'}
//                 </button>
//                 <div className="list-dropdown">
//                     <button onClick={() => setShowListMenu(!showListMenu)} title="List">
//                         📝
//                     </button>
//                     {showListMenu && (
//                         <div className="dropdown-content">
//                             <button onClick={() => insertMarkdown('- ')}>
//                                 Unordered List
//                             </button>
//                             <button onClick={() => insertMarkdown('1. ')}>
//                                 Ordered List
//                             </button>
//                             <button onClick={() => insertMarkdown('- [ ] ')}>
//                                 Checklist
//                             </button>
//                         </div>
//                     )}
//                 </div>
//                 <div className="image-upload">
//                     <input
//                         type="file"
//                         id="imageUpload"
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                         style={{ display: 'none' }}
//                     />
//                     <button 
//                         onClick={() => document.getElementById('imageUpload').click()}
//                         type="button" 
//                         title="Upload Image"
//                     >
//                         🖼️
//                     </button>
//                 </div>
//             </div>
//             <div className="editor-container">
//                 <div className="editor-section">
//                     <h3>Markdown Input</h3>
//                     <textarea
//                         ref={textAreaRef}
//                         value={markdown}
//                         onChange={handleMarkdownChange}
//                         onKeyDown={handleKeyDown}
//                         placeholder="Write your markdown here..."
//                     />
//                 </div>
//                 <div className="preview-section">
//                     <h3>Preview</h3>
//                     <div 
//                         className="preview-content"
//                         dangerouslySetInnerHTML={{ __html: getMarkdownPreview(markdown) }}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MarkdownEditor;
