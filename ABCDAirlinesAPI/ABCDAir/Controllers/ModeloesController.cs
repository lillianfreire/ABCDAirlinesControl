using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ABCDAir.Models;

namespace ABCDAir.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModeloesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ModeloesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Modeloes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Modelo>>> GetModeloAeronave()
        {
            return await _context.ModeloAeronave.ToListAsync();
        }

        // GET: api/Modeloes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Modelo>> GetModelo(string id)
        {
            var modelo = await _context.ModeloAeronave.FindAsync(id);

            if (modelo == null)
            {
                return NotFound();
            }

            return modelo;
        }

        // PUT: api/Modeloes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModelo(string id, Modelo modelo)
        {
            if (id != modelo.CODE)
            {
                return BadRequest();
            }

            _context.Entry(modelo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModeloExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Modeloes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Modelo>> PostModelo(Modelo modelo)
        {
            _context.ModeloAeronave.Add(modelo);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ModeloExists(modelo.CODE))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetModelo", new { id = modelo.CODE }, modelo);
        }

        // DELETE: api/Modeloes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Modelo>> DeleteModelo(string id)
        {
            var modelo = await _context.ModeloAeronave.FindAsync(id);
            if (modelo == null)
            {
                return NotFound();
            }

            _context.ModeloAeronave.Remove(modelo);
            await _context.SaveChangesAsync();

            return modelo;
        }

        private bool ModeloExists(string id)
        {
            return _context.ModeloAeronave.Any(e => e.CODE == id);
        }
    }
}
